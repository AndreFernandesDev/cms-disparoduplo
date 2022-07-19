// Stores
import { get } from 'svelte/store';
import albumStore from '$lib/stores/albums';
import { fetchData, MutationActions, mutations, MutationTypes } from './db';

// Store images in Google Cloud.
const storeFileCloud = (file: File) => {
	// Do something here
	return 'http://localhost:3000/sample.jpg';
};

// Store images url in array.
export const storeMediaData = async (albumId: string, files: FileList) => {
	if (!files.length) return [];
	let newMedia = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const storagedFilePath = storeFileCloud(file);
		const mutation = mutations(MutationTypes.media, MutationActions.add);
		const variables = {
			featured: false,
			albumId: albumId,
			name: file.name ? file.name : '',
			type: file.type,
			path: storagedFilePath,
		};

		const res = await fetchData(mutation, variables);
		newMedia.push(res.data.addMedia);
	}

	return newMedia;
};

export const deleteMedia = async (albumId: string, files: Array<String>) => {
	if (!files.length) return [];
	let deletedMedia = [];

	for (let i = 0; i < files.length; i++) {
		const fileId = files[i];
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
