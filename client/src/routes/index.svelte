<script lang="ts">
	import {
		mutations,
		MutationTypes,
		MutationActions,
		query,
		Query,
		fetchData,
	} from '$lib/utilities/db';
	import { onMount } from 'svelte';

	// Stores
	import albums from '$lib/stores/albums';

	// Components
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';

	onMount(async () => {
		const res = await fetchData(query(Query.all), {});
		albums.set(res.data.albums);
	});

	$: handleDelete = async (id) => {
		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.delete);
		const variables = {
			id: id,
		};

		const res = await fetchData(mutation, variables);

		// Update internal data
		const updatedAlbums = $albums.filter((item) => item.id !== id);
		albums.set(updatedAlbums);
	};
</script>

<svelte:head>
	<title>Disparo Duplo | Admin Panel</title>
</svelte:head>

<!-- ALL ALBUMS -->
<section class="flex flex-wrap w-full">
	<Heading type="h1">All albums</Heading>
	<div class="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 mb-6">
		{#each $albums as { id, name, date, description, featured }}
			<AlbumCard
				image={featured ? featured.path : ''}
				{id}
				{name}
				{date}
				{description}
			>
				<Button type="Edit" href="album/{id}">Editar</Button>
				<Button onClick={() => handleDelete(id)} type="Delete">Apagar</Button>
			</AlbumCard>
		{/each}
	</div>
</section>
