<script lang="ts">
	export let name: string;
	export let date: number;
	export let description: string;
	export let id: string;
	export let image: string;

	import { fromUnix } from "$lib/utilities/utilities";
</script>

<div class="card bg-base-100 shadow-xl">
	<a class="w-full" href="album/{id}">
		<figure class="w-full"><img src={image} class="w-full h-56 object-cover" alt="Shoes" /></figure>
		<div class="card-body">
			<h2 class="card-title">{name} | {fromUnix(date, "day", "-")}</h2>
			<p>{description.slice(0, 30)}{description.length > 30 ? "...": ""}</p>
			<div class="card-actions justify-end mt-2">
				<slot />
			</div>
		</div>
	</a>
</div>