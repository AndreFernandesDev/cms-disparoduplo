<script lang="ts">
	import { mutations, MutationTypes, MutationActions, query, Query, fetchData } from "$lib/utilities/db";
	import { isEqual, fromUnix, toUnix } from "$lib/utilities/utilities";
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

	let form:HTMLFormElement;
	const id = $page.params.id;
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
			description: json.description
		}

		const res = await fetchData(mutation, variables);

		console.log(res);
	}

</script>

{#if album}

	<!-- Settings -->
	<section class="flex flex-wrap items-stretch w-full my-12">
		<div class="flex flex-col w-3/5 pr-12">
			
			<form bind:this={form} on:submit|preventDefault={handleSubmit} on:change={handleChange}>
				<Input value={String(album.name)} type="text" name="name" placeholder="Nome..." />
				<Input value={String(album.description)} type="textarea" name="description" placeholder="Sobre o evento..." />
				<Input value={album.location} type="text" name="location" placeholder="Local..." />
				<Input value={String(fromUnix(album.date))} type="date" name="date" placeholder="Dia do evento..." />
				<Button action="submit" type="Popup" display={displayUpdateBtn}>Atualizar</Button>
			</form>

		</div>
		<img src={album.featured.path} alt="" class="w-2/5 h-96 object-cover rounded-md" />
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

