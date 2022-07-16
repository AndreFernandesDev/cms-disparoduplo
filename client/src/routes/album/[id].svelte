<script lang="ts">
	import { query, Query, fetchData } from "$lib/utilities/db";
	import { isEqual } from "$lib/utilities/utilities";
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

	const id = $page.params.id;
	let displayUpdateBtn = false;
	let initialAlbum = {};
	let activeImg = {};
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
		album = $albums.filter((item) => item.id === id)[0];
		initialAlbum = {...album};
	});

	$: handleChange = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		const key = String(target.name);
		const value: string | number = target.value;

		album[key] = value;

		if(!isEqual(album, initialAlbum)) {
			displayUpdateBtn = true;
		} else {
			displayUpdateBtn = false;
		}
	}

	const handleUpdate = () => {
		console.log(album);
	}

	const handleImagePreview = (path, name) => {
		activeImg = {
			path: path,
			name: name
		}
	}


</script>

{#if album}
	<Button type="Popup" display={displayUpdateBtn} onClick={handleUpdate}>Atualizar</Button>
	<!-- Settings -->
	<section class="flex flex-wrap items-stretch w-full my-12">
		<div class="flex flex-col w-2/5 pr-12">
					<Heading type="h1">Definicoes</Heading>
					<p class="my-2">Apos atualizar album, clique em "Atualizar".</p>
		<form on:change={handleChange}>
			<Input value={String(album.name)} type="text" name="name" placeholder="Alexandre & Jessica..." />
			<Input value={String(album.description)} type="textarea" name="description" placeholder="Sobre o evento..." />
			<Input value={album.location} type="text" name="location" placeholder="Madeira..." />
			<Input value={album.date} type="date" name="date" placeholder="Dia do evento..." />
		</form>

		</div>
		<img src={album.featured.path} alt="" class="w-3/5 h-96 object-cover rounded-md" />
	</section>
	<!-- Media -->
	<section class="flex w-full gap-8">
		{#if album.media && album.media.length}
			<Modal type="click" id="fullImg" extraClass="bg-black">
				<img for="my-modal" src={activeImg.path} alt={activeImg.name} class="modal-button w-full h-full object-contain rounded-md"/>
			</Modal>
			<Image modalId="fullImg" onClick={() => handleImagePreview(album.featured.path, album.featured.name)} featured={true} path={album.featured.path} name={album.featured.name} />
			{#each album.media as file}
				{#if file.featured === false}
					<Image modalId="fullImg" onClick={() => handleImagePreview(file.path, file.name)} featured={false} path={file.path} name={file.name} />
				{/if}
			{/each}
		{/if}
	</section>
{/if}

