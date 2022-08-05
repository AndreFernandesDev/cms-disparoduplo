// Stores
import { get } from 'svelte/store';
import albumStore from '$lib/stores/albums';
import { fetchData, MutationActions, mutations, MutationTypes } from './db';
import axios from 'axios';

interface Media {
	[key: string]: any;
}

function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

const createFile = async (file: File) => {
	let postid = uuidv4();
	// Create new file so we can rename the file
	let blob = file.slice(0, file.size, 'image/jpeg');
	const newFile = new File([blob], `${postid}_post.jpeg`, {
		type: 'image/jpeg',
	});
	// Build the form data - You can add other input values to this i.e descriptions, make sure img is appended last
	let formData = new FormData();
	formData.append('image', newFile);
	await fetch('https://backend-jxq6jwbz6a-nw.a.run.app/upload', {
		method: 'POST',
		body: formData,
	}).then((res) => res.text());

	return `${postid}_post.jpeg`;
};

// Store images in Google Cloud.
const storeFileCloud = async (file: File) => {
	const fileName = await createFile(file);
	return `https://storage.googleapis.com/disparoduplo/${fileName}`;
};

// Store images url in array.
export const storeMediaData = async (
	albumId: string,
	files: FileList,
	featured = '',
	sectionName = 'general'
) => {
	if (!files.length) return [];
	let newMedia = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const storagedFilePath = await storeFileCloud(file);
		const mutation = mutations(MutationTypes.media, MutationActions.add);
		const variables = {
			featured: featured === file.name,
			albumId: albumId,
			name: file.name ? file.name : '',
			type: file.type,
			section: sectionName,
			path: storagedFilePath,
		};

		console.log(sectionName);
		const res = await fetchData(mutation, variables);
		console.log(res);
		newMedia.push(res.data.addMedia);
	}

	return newMedia;
};

export const deleteMedia = async (albumId: string, files: object) => {
	if (!files.length) return [];
	let deletedMedia = [];

	for (let i = 0; i < files.length; i++) {
		const fileId = files[i].id;
		const fileName = files[i].path.split('/').slice(-1);

		// Delete from Google Cloud Storage
		await fetch(`https://backend-jxq6jwbz6a-nw.a.run.app/delete/${fileName}`, {
			method: 'GET',
		}).then((res) => res.text());

		// Delete from Mongo Atlas Storage
		const mutation = mutations(MutationTypes.media, MutationActions.delete);
		const variables = {
			id: fileId,
		};

		const res = await fetchData(mutation, variables);
		deletedMedia.push(res.data.deleteMedia);
	}

	return deletedMedia;
};

export const updateFeatured = async (
	mediaId: string,
	oldFeaturedId: string
) => {
	if (!mediaId || !oldFeaturedId) return null;

	// API Parameters
	const mutation = mutations(MutationTypes.media, MutationActions.update);
	const variables = {
		id: mediaId,
		oldFeaturedId: oldFeaturedId,
	};

	const res = await fetchData(mutation, variables);
	return res;
};

const updateSection = async (mediaId: string, section: string) => {
	if (!mediaId || !section) return null;

	// API Parameters
	const mutation = mutations(
		MutationTypes.media,
		MutationActions.updateSection
	);
	const variables = {
		id: mediaId,
		section: section,
	};

	const res = await fetchData(mutation, variables);
	return res;
};

// Media Sections Functions
export const checkMediaSection = async (
	media: Media[],
	initialMedia: Media[]
) => {
	if (!media || !initialMedia) return null;

	for (let i = 0; i < media.length; i++) {
		const file = media[i];
		const mediaSection = file.section;
		const initialSection = getMedia(file.id, initialMedia);
		if (initialSection) {
			if (mediaSection != initialSection.section) {
				console.log(mediaSection, initialSection);
				console.log(await updateSection(file.id, mediaSection));
			}
		}
	}
};

const getMedia = (id: string, mediaCollection: Media[]) => {
	const media = mediaCollection.filter((file) => file.id === id);
	return media[0];
};

export const getSections = (mediaCollection: Media[]) => {
	if (!mediaCollection.length) {
		return [];
	}

	let updatedSections: string[] = [];
	for (let i = 0; i < mediaCollection.length; i++) {
		let media = mediaCollection[i];
		if (!updatedSections.includes(media.section)) {
			updatedSections.push(media.section);
		}
	}

	return updatedSections;
};

export const groupMedia = (mediaCollection: Media[]) => {
	if (!mediaCollection.length) {
		return [];
	}

	let groupedSections: Media = {};
	for (let i = 0; i < mediaCollection.length; i++) {
		let media = mediaCollection[i];
		if (!groupedSections[media.section]) {
			groupedSections[media.section] = [media];
		} else {
			groupedSections[media.section].push(media);
		}
	}

	return groupedSections;
};

// Album Position Update
const updateAlbumPosition = async (mediaId: string, position: number) => {
	if (!mediaId || !position) return null;

	// API Parameters
	const mutation = mutations(MutationTypes.album, MutationActions.updateOrder);
	const variables = {
		id: mediaId,
		position: position,
	};

	const res = await fetchData(mutation, variables);
	return res;
};

export const updateAlbumOrder = async (albumCollection: any[]) => {
	if (!albumCollection.length) {
		return [];
	}

	for (let i = 0; i < albumCollection.length; i++) {
		const album = albumCollection[i];
		await updateAlbumPosition(album.id, i + 1);
	}
};
