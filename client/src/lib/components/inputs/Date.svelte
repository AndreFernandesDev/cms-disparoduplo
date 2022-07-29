<script lang="ts">
	export let name: string;
	export let label: string = '';
	export let value: string = '';
	export let placeholder: string = '';
	export let required = true;

	export let onChange = () => {};
</script>

<div class="my-4 group">
	{#if label !== ''}
		<label
			for={name}
			class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>{label}</label
		>
	{/if}
	<div class="relative">
		<input
			on:change={onChange}
			type="date"
			{value}
			{name}
			id={name}
			class="input input-bordered w-full"
			{placeholder}
			{required}
		/>
	</div>
</div>
