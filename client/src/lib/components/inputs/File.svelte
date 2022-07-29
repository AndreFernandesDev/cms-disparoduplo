<script lang="ts">
	export let name: string;
	export let label = '';
	export let files: FileList;
	export let onChange = () => {};
	export let required = true;
</script>

<div class="relative z-0 w-full my-4 group">
	{#if label !== ''}
		<label
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			for={name}>{label}</label
		>
	{/if}
	<input
		class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
		id={name}
		{name}
		type="file"
		accept="image/png, image/gif, image/jpeg"
		multiple
		bind:files
		on:change={onChange}
		{required}
	/>
</div>
