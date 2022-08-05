<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	import {
		mutations,
		MutationTypes,
		MutationActions,
		query,
		Query,
		fetchData,
	} from '$lib/utilities/db';
	import { updateArray } from '$lib/utilities/utilities';
	import { updateAlbumOrder, deleteMedia } from '$lib/utilities/manageMedia';

	// Stores
	import albums from '$lib/stores/albums';

	// Components
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	let displayUpdateBtn = false;
	let toDeleteAlbums: string[] = [];
	let list: any[] = [];
	let initiaList: any[] = [];

	onMount(async () => {
		const res = await fetchData(query(Query.all), {});
		albums.set(res.data.albums);
		initiaList = [ ...$albums ];
		list = $albums;
	});

	// Update internal data in case new album is created.
	$: {
		if($albums.length > initiaList.length) {
			initiaList = updateArray($albums, initiaList);
			list = updateArray($albums, list);
		}

	}

	const showUpdateBtn = () => {
		displayUpdateBtn = false;

		// Check if albums list has changed.
		for (let i = 0; i < list.length; i++) {
			if(list[i].name !== initiaList[i].name) {
				displayUpdateBtn = true;
			}
		}

		// Check if there are albums to delete.
		if(toDeleteAlbums.length) {
			displayUpdateBtn = true;
		}
	};

	const deleteAlbumsInList = async () => {
		if(!toDeleteAlbums.length) return null;

		for (let i = 0; i < toDeleteAlbums.length; i++) {
			const albumId = toDeleteAlbums[i];
			await deleteAlbum(albumId);
		}

		axios
			.post('https://api.netlify.com/build_hooks/62e468b2c29a8d10a253d446')
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}
	const deleteAlbum = async (id: string) => {
		// Delete Media from Google and Atlas
		const deletedAlbum = $albums.filter((item) => item.id === id)[0];
		if(deletedAlbum.media) {
			const mediaRes = await deleteMedia(id, deletedAlbum.media);
		}

		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.delete);
		const variables = {
			id: id,
		};

		const res = await fetchData(mutation, variables);

		// Update internal data
		// const updatedAlbums = $albums.filter((item) => item.id !== id);
		// albums.set(updatedAlbums);
	}


	const handleDelete = (id: string) => {
		toDeleteAlbums.push(id);

		list = list.filter(album => album.id != id);
		showUpdateBtn();
	};

	const handleSelect = (e) => {
		const value = JSON.parse(e.target.value);
		const album = list.splice(value.index, 1)[0];
		list.splice(value.new, 0, album);

		list = list;
		showUpdateBtn();
    }

	const handleRevert = () => {
		toDeleteAlbums = [];
		list = [ ...initiaList ];
		showUpdateBtn();
	}

	const handleSubmit = async () => {
		// Reset internal data.
		toDeleteAlbums = [];
		list = [ ...list ];
		initiaList = [ ...list ];
		$albums = [ ...list ];

		showUpdateBtn()

		await deleteAlbumsInList();
		await updateAlbumOrder(list);


	}
	
</script>

<svelte:head>
	<title>Disparo Duplo | Admin Panel</title>
</svelte:head>

<!-- ALL ALBUMS -->
<section class="flex flex-wrap w-full">
	<Heading type="h1">All albums</Heading>
	<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 mb-6">
		{#each list as { id, name, date, description, featured }, position}
			<AlbumCard
				image={featured ? featured.path : ''}
				{id}
				{name}
				{date}
				{description}
			>

				<select class="select select-bordered" bind:value={position} on:change|preventDefault={handleSelect}>
					{#each list as album, index}
						{#if position === index}
							<option value={position}>{position + 1}</option>
						{:else}
							<option value={JSON.stringify({index: position, new: index})}>{index + 1}</option>
						{/if}
					{/each}
				</select>
				<Button type="Edit" href="album/{id}">Editar</Button>
				<Button onClick={() => handleDelete(id)} type="Delete">Apagar</Button>
			</AlbumCard>
		{/each}
	</div>

	<Button action="submit" onClick={handleSubmit} type="Popup" display={displayUpdateBtn}
					>Confirmar</Button>
					<Button action="submit" onClick={handleRevert} type="Popup" extraClass="right-44 btn-secondary" display={displayUpdateBtn}
					>Reverter</Button>
</section>
