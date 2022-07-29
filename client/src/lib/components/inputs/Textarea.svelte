<script lang="ts">
	export let name: string;
	export let value: string = '';
	export let placeholder: string = '';
	export let required = true;

	export let onChange = () => {};
</script>

<div class="relative z-0 w-full my-4 group">
	<textarea
		on:change={onChange}
		id={name}
		{name}
		rows="4"
		class="textarea textarea-bordered w-full h-44"
		{placeholder}
		{required}>{value}</textarea
	>
</div>
