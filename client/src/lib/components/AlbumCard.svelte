<script lang="ts">
	export let name: string;
	export let date: number;
	export let description: string;
	export let id: string;

	import { formatDate } from "$lib/utilities/utilities";
</script>

<div
	class="w-4/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
	<a href="album/{id}">
		<img
			class="rounded-t-lg h-64 w-full object-cover"
			src="sample.jpg"
			alt=""
		/>
	</a>
	<div class="p-5">
		<a href="album/{id}">
			<h5
				class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{name} | {formatDate(date)}
			</h5>
		</a>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
			{description}
		</p>

		<div class="flex w-full justify-end">
			<slot />
		</div>
	</div>
</div>
