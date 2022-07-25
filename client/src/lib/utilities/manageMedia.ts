// Stores
import { get } from 'svelte/store';
import albumStore from '$lib/stores/albums';
import { fetchData, MutationActions, mutations, MutationTypes } from './db';
import axios from 'axios';

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
	featured = ''
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
			path: storagedFilePath,
		};

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
