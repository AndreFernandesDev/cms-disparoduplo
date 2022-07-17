<script lang="ts">
	export let name: string;
	export let date: number;
	export let description: string;
	export let id: string;

	import { fromUnix } from "$lib/utilities/utilities";
</script>

<div class="card w-1/7 mb-12 bg-base-100 shadow-xl">
	<a href="album/{id}">
		<figure><img src="https://placeimg.com/400/225/arch" class="w-full object-cover" alt="Shoes" /></figure>
		<div class="card-body">
			<h2 class="card-title">{name} | {fromUnix(date, "day", "-")}</h2>
			<p>{description.slice(0, 30)}{description.length > 30 ? "...": ""}</p>
			<div class="card-actions justify-end mt-2">
				<slot />
			</div>
		</div>
	</a>
</div>