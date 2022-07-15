<script>
	import { query, Query, fetchData } from "$lib/utilities/db";
	import { onMount } from 'svelte';

	// Stores
	import albums from '$lib/stores/albums';
	import { page } from '$app/stores';


	// Components
	import Heading from '$lib/components/Heading.svelte';

	const id = $page.params.id;
	let album = {
		name: "",
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
		console.log(album);
	});

</script>

{#if album}
	<section class="flex flex-wrap w-full justify-center my-12">
		<Heading type="h1">{album.name}</Heading>
		<div class="flex flex-wrap justify-evenly items-stretch gap-6" />
	</section>
	<section>
		{#each album.media as file}
			<img src={file.path} alt={file.name} class="w-24 h-24 object-cover" />
		{/each}
	</section>
{/if}

