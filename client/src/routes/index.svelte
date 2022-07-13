<script lang="ts">
	import AlbumCard from '$lib/components/AlbumCard.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import { getContextClient, gql, queryStore } from "@urql/svelte";
	import { query } from '$lib/graphql/albums'
	
	$: albums = queryStore({
		client: getContextClient(),
		query: query.all,
	});

</script>

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
<section class="flex flex-wrap w-full justify-center my-12">
	<Heading type="h1">Albuns</Heading>
	<div class="flex w-full flex-wrap justify-evenly items-stretch gap-6">
		{#if $albums.fetching}
			Loading...
		{:else if $albums.error}
			Oh no... {$albums.error.message}
		{:else}
			{#each $albums.data.albums as item}
				<AlbumCard id={item.id} name={item.name} date={item.date} description={item.description}>
					<Button type="Edit" id={item.id}>Editar</Button>
					<Button type="Delete" id={item.id}>Apagar</Button>
				</AlbumCard>
			{/each}
		{/if}
	</div>
</section>
