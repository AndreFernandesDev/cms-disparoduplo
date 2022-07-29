<script lang="ts">
	import {
		mutations,
		MutationTypes,
		MutationActions,
		fetchData,
	} from '$lib/utilities/db';

	// Stores
	import albums from '$lib/stores/albums';

	// Components
	import Heading from './Heading.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import { storeMediaData } from '$lib/utilities/manageMedia';
	import { toUnix } from '$lib/utilities/utilities';

	let isButtonDisabled = true;

	interface PreviewFile {
		file: File;
		blurb: string;
		name: string;
	}

	let closeFormLabel;
	let form: HTMLFormElement;
	let files: FileList;
	let previewFiles: Array<PreviewFile> = [];
	let featured = '';

	$: {
		if (previewFiles.length) {
			storeFeatured(previewFiles[0].name);
		}
	}

	// Preview all media;
	const showFiles = () => {
		if (!files) return [];
		previewFiles = [];

		Object.keys(files).forEach((f) => {
			const currentFile = files[parseInt(f)];
			const reader = new FileReader();
			reader.readAsDataURL(currentFile);

			reader.onload = (e) => {
				previewFiles = [
					...previewFiles,
					{
						file: currentFile,
						blurb: String(e.target ? e.target.result : ''),
						name: currentFile.name,
					},
				];
			};
		});
	};

	// Store form in Database.
	const handleSubmit = async () => {
		if (closeFormLabel) {
			closeFormLabel.click();
		}

		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.add);
		const variables = {
			name: json.name,
			date: toUnix(String(json.date)),
			location: json.location,
			description: json.description ? json.description : '',
			password: json.password ? json.password : '',
		};

		const res = await fetchData(mutation, variables);
		let newAlbum = res.data.addAlbum;
		let newMedia = await storeMediaData(newAlbum.id, files, featured);
		const featuredMedia = newMedia.filter((item) => item.featured === true)[0];

		newAlbum = {
			...newAlbum,
			media: [...newMedia],
			featured: { id: featuredMedia.id, path: featuredMedia.path },
		};

		albums.set([...$albums, newAlbum]);

		form.reset();
		previewFiles = [];
		featured = '';
	};

	// Check if there are any missing fields.
	const handleChange = () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		// Not required fields
		delete json.description;
		delete json.password;

		let isEmpty = Object.values(json).some((x) => x === null || x === '');

		isButtonDisabled = files.length ? isEmpty : true;
	};

	// Record featured image
	const storeFeatured = (imgName: string) => {
		featured = imgName ? imgName : '';
	};
</script>

<form
	bind:this={form}
	on:submit|preventDefault={handleSubmit}
	on:change={handleChange}
>
	<Heading type="h2">New album</Heading>
	<Input type="text" name="name" placeholder="Nome do evento..." />
	<Input type="text" name="password" placeholder="Senha..." required={false} />
	<Input
		type="textarea"
		name="description"
		placeholder="Sobre o evento..."
		required={false}
	/>
	<Input type="text" name="location" placeholder="Madeira..." />
	<Input type="date" name="date" placeholder="Dia do evento..." />
	<Input onChange={showFiles} bind:files type="file" name="media" />

	<label bind:this={closeFormLabel} for="newAlbum" />
	<Button action="submit" extraClass={isButtonDisabled ? 'btn-disabled' : ''}
		>Salvar</Button
	>
</form>

<div class="flex flex-wrap justify-between items-center mt-12">
	{#each previewFiles as media, index}
		{#if index === 0}
			<img
				src={media.blurb}
				name={media.name}
				alt="Preview"
				class="pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg {media.name ==
				featured
					? 'border-primary'
					: 'border-slate-200'} p-1"
				on:click={() => storeFeatured(media.name)}
			/>
		{:else}
			<img
				src={media.blurb}
				name={media.name}
				alt="Preview"
				class="pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg {media.name ==
				featured
					? 'border-primary'
					: 'border-slate-200'} p-1"
				on:click={() => storeFeatured(media.name)}
			/>
		{/if}
	{/each}
</div>
