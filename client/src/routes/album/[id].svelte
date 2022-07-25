<script lang="ts">
	import { mutations, MutationTypes, MutationActions, query, Query, fetchData } from "$lib/utilities/db";
	import { isEqual, fromUnix, toUnix } from "$lib/utilities/utilities";
	import { deleteMedia, storeMediaData, updateFeatured } from "$lib/utilities/manageMedia";
	import { onMount } from 'svelte';

	// Stores
	import albums from '$lib/stores/albums';
	import { page } from '$app/stores';


	// Components
	import Image from "$lib/components/Image.svelte";
	import Heading from '$lib/components/Heading.svelte';
	import Button from "$lib/components/Button.svelte";
	import Input from '$lib/components/inputs/Input.svelte';
	import Modal from "$lib/components/Modal.svelte";
	
	interface Album {
		[key: string]: any;
	}

	interface Media {
		[key: string]: any;
	}

	let form:HTMLFormElement;
	let files:FileList;
	const id = $page.params.id;
	let toDeleteMedia:Media = [];
	let toFeaturedMedia = {id: "", oldFeaturedId: ""};
	let displayUpdateBtn = false;
	let initialAlbum = {};
	let activeImg = {
		path: '',
		name: ''
	};
	let album:Album = {
		name: "",
		description: "",
		location: "",
		date: 0,
		featured: {
			path: ""
		},
		media: [{
			path: "",
			name: ""
		}]
	};

	onMount(async () => {
		if(!$albums.length) {
			const res = await fetchData(query(Query.all), {});
			albums.set(res.data.albums)
		}
		album = $albums.filter((item:Album) => item.id === id)[0];
		initialAlbum = {...album};
	});

	const showUpdateBtn = () => {
		if(!isEqual(album, initialAlbum) || files.length) {
			displayUpdateBtn = true;
		} else {
			displayUpdateBtn = false;
		}
	}


	$: handleFormChange = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		const key = String(target.name);
		const value: string | number = target.value;

		album[key] = value;

		showUpdateBtn();
	}

	const handleImagePreview = (path: string, name: string) => {
		activeImg = {
			path: path,
			name: name
		}
	}

	const handleSubmit = async () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.update)
		const variables = {
			id: id,
			name: json.name,
			date: toUnix(String(json.date)),
			location: json.location,
			description: json.description,
			password: json.password
		}

		const res = await fetchData(mutation, variables);

		// Media
		// ---
		// Add
		if(files.length) {
			const newMedia = await storeMediaData(id, files);
			album.media = [...album.media, ...newMedia];
		}
		// Delete
		if(toDeleteMedia.length) {
			await deleteMedia(id, toDeleteMedia);
		}
		// Update
		if(toFeaturedMedia.id && toFeaturedMedia.oldFeaturedId) {
			await updateFeatured(toFeaturedMedia.id, toFeaturedMedia.oldFeaturedId);
		}

		// Reset all internal variables and fields
		files = [];
		const fieldInput = document.getElementById("newMediaUpload");
		if(fieldInput) fieldInput.value = []

		toDeleteMedia = [];

		initialAlbum = {...album};

		showUpdateBtn();

	}

	const handleDelete = async (id: string, path: string) => {
		if(!id) return null;
		
		album.media = album.media.filter((media: Media) => media.id !== id);
		toDeleteMedia.push({id: id, path: path });
		showUpdateBtn()
	}


	const handleFeatured = async (id: string, path: string) => {
		if(!id) return null;

		const media = album.media.map((media: Media) => {
			if( media.id === id ) {
				media.featured = true;
			} else if (media.id === album.featured.id) {
				media.featured = false;
			}
			return media;
		});

		const featured = {
			id: id,
			path: path
		}

		// Update Internal
		toFeaturedMedia = {
			id: id,
			oldFeaturedId: album.featured.id,
		}

		album = { ...album, media: media, featured: featured};

		showUpdateBtn()
	}
</script>

{#if album}
	<!-- BUTTONS PANEL -->
	<form class="w-full" bind:this={form} on:submit|preventDefault={handleSubmit} on:change={handleFormChange}>

	<section class="flex flex-wrap items-stretch w-full mt-6">
		<Heading type="h1">Adicionar multimedia</Heading>
		<Input onChange={showUpdateBtn} bind:files={files} type="filePreview" name="newMediaUpload" />
	</section>
	<!-- SETTINGS -->
	<section class="flex flex-wrap items-stretch w-full ">
		<Heading type="h1">Alterar album</Heading>
		<!-- FORM -->
		<div class="flex flex-col w-3/5 pr-12">
			<Input value={String(album.name)} type="text" name="name" placeholder="Nome..." />
			<Input value={String(album.password)} type="text" name="password" placeholder="Senha..." />
			<Input value={String(album.description)} type="textarea" name="description" placeholder="Sobre o evento..." />
			<Input value={album.location} type="text" name="location" placeholder="Local..." />
			<Input value={String(fromUnix(album.date))} type="date" name="date" placeholder="Dia do evento..." />
			<Button action="submit" type="Popup" display={displayUpdateBtn}>Atualizar</Button>
		</div>
		<!-- FEATURED IMAGE -->
		<img src={album.featured.path} alt="" class="w-2/5 h-96 object-cover rounded-md" />
	</section>

	</form>


	<!-- MEDIA -->
	<section class="flex flex-wrap w-full">
		<Heading type="h1">Fotos & Videos</Heading>
		{#if album.media && album.media.length}
			<Modal type="click" id="fullImg" extraClass="bg-black">
				<img for="my-modal" src={activeImg.path} alt={activeImg.name} class="modal-button w-full h-full object-contain rounded-md"/>
			</Modal>
			<Image modalId="fullImg" onClickDelete={() => handleDelete(album.featured.id, album.featured.path)} onClick={() => handleImagePreview(album.featured.path, album.featured.name)} featured={true} path={album.featured.path} name={album.featured.name} />
			{#each album.media as file}
				{#if file.featured === false}
					<Image modalId="fullImg" onClickFeatured={() => handleFeatured(file.id, file.path)} onClickDelete={() => handleDelete(file.id, file.path)} onClick={() => handleImagePreview(file.path, file.name)} featured={false} path={file.path} name={file.name} />
				{/if}
			{/each}
		{/if}
	</section>
{/if}

