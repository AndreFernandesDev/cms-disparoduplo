<script lang="ts">
	import { mutations, MutationTypes, MutationActions, fetchData } from "$lib/utilities/db";

	// Stores
	import albums from '$lib/stores/albums';

	// Components
	import Heading from "./Heading.svelte";
	import Input from '$lib/components/inputs/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	

	let isButtonEnabled = true;

	interface PreviewFile {
		file: File,
		blurb: string,
		name: string,
	}

	let form:HTMLFormElement;
	let files:FileList;
	let previewFiles:Array<PreviewFile> = [];
	let featured = "";

	$: {
		if(previewFiles.length) {
			storeFeatured(previewFiles[0].name);
		}
	}

	// Preview all media;
	const showFiles = () => {
		if(!files) return [];
		previewFiles = [];

		Object.keys(files).forEach((f) => {
			const currentFile = files[parseInt(f)];
			const reader = new FileReader();
			reader.readAsDataURL(currentFile);

			reader.onload = e => {
				previewFiles = [...previewFiles, {file: currentFile, blurb: String(e.target ? e.target.result : ""), name: currentFile.name}];
			}
		})
	}

	// Store images in Google Cloud.
	const storeFileCloud = (file: PreviewFile) => {
		// Do something here
		return 'http://localhost:3000/sample.jpg'
	}
	

	// Store images url in array.
	const storeMediaData = async (albumId: string) => {
		if(!previewFiles) return [];
		const mediaList = await Promise.all(previewFiles.map(async (file) => {
			// Store in Cloud
			const storagedFilePath = storeFileCloud(file);

			// Store in Database
			const mutation = mutations(MutationTypes.media, MutationActions.add)
			const variables = {
				featured: featured === file.name,
				albumId: albumId,
				name: file.name ? file.name : '',
				type: file.file.type,
				path: storagedFilePath,
			}

			const res = await fetchData(mutation, variables);
			// console.log(res);

			return res.data.addMedia;
		}));
		return mediaList;
	}


	// Store form in Database.
	const handleSubmit = async () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.add)
		const variables = {
			name: json.name,
			date: new Date(String(json.date)).valueOf(),
			location: json.location,
			description: json.description
		}

		const res = await fetchData(mutation, variables);
		let newAlbum = res.data.addAlbum
		let newMedia = await storeMediaData(newAlbum.id);

		newAlbum = {...newAlbum, media: [ ...newMedia ] }

		console.log(newAlbum);
		albums.set([...$albums, newAlbum]);


		form.reset();
		previewFiles = [];
		featured = "";
	}

	// Check if there are any missing fields.
	const handleChange = () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		const isEmpty = Object.values(json).some(x => x === null || x === '');

		isButtonEnabled = isEmpty;
	}

	// Record featured image
	const storeFeatured = (imgName: string) => {
		featured = imgName ? imgName : "";
	}
</script>

<form bind:this={form} on:submit|preventDefault={handleSubmit} on:change={handleChange}>
	<Heading type="h2">New album</Heading>
	<Input type="text" name="name" placeholder="Alexandre & Jessica..." />
	<Input type="textarea" name="description" placeholder="Sobre o evento..." />
	<Input type="text" name="location" placeholder="Madeira..." />
	<Input type="date" name="date" placeholder="Dia do evento..." />
	<Input onChange={showFiles} bind:files={files} type="file" name="media" />

	<Button action="submit" extraClass={isButtonEnabled ? "btn-disabled" : ""}>Salvar</Button>
</form>

<div class="flex flex-wrap justify-between items-center mt-12">
	{#each previewFiles as media, index}
		{#if index === 0}
			<img src={media.blurb} name={media.name} alt="Preview" class="pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg {media.name == featured ? "border-primary" : "border-slate-200"} p-1" on:click={() => storeFeatured(media.name)}/>
		{:else}
			<img src={media.blurb} name={media.name} alt="Preview" class="pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg {media.name == featured ? "border-primary" : "border-slate-200"} p-1" on:click={() => storeFeatured(media.name)}/>
		{/if}
	{/each}
</div>
