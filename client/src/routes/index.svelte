


<script lang="ts">
	import { mutations, MutationTypes, MutationActions, query, Query, fetchData } from "$lib/utilities/db";
	import { onMount } from "svelte";

	// Stores
	import albums from '$lib/stores/albums';

	// Components
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	onMount(async () => {
		const res = await fetchData(query(Query.all), {});
		albums.set(res.data.albums)
	});

	$: handleDelete = async (id) => {
		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.delete)
		const variables = {
				id: id,
			}

		const res = await fetchData(mutation, variables);

		// Update internal data
		const updatedAlbums = $albums.filter((item) => item.id !== id);
		albums.set(updatedAlbums);
	}
</script>

<svelte:head>
	<title>Disparo Duplo | Admin Panel</title>
</svelte:head>

<!-- FEATURED -->
<!-- <section class="flex flex-wrap w-full justify-center my-12">
	<Heading type="h1">Featureds</Heading>
	<div class="w-full flex flex-wrap justify-evenly items-stretch gap-6">
		{#each featured as item}
			<AlbumCard name={item} date={item}>
				<Button type="Edit">Editar</Button>
			</AlbumCard>
		{/each}
	</div>
</section> -->

<!-- ALL ALBUMS -->
<section class="flex flex-wrap w-full">
	<Heading type="h1">All albums</Heading>
	<div class="flex w-full flex-wrap gap-6">
		{#each $albums as { id, name, date, description }}
			<AlbumCard id={id} name={name} date={date} description={description}>
				<Button type="Edit" href="album/{id}">Editar</Button>
				<Button onClick={() => handleDelete(id)} type="Delete">Apagar</Button>
			</AlbumCard>
		{/each}
	</div>
</section>	

