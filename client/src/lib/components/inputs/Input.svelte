<script lang="ts">
	// Types of Input
	import Text from '$lib/components/inputs/Text.svelte';
	import Textarea from '$lib/components/inputs/Textarea.svelte';
	import Date from '$lib/components/inputs/Date.svelte';
	import File from '$lib/components/inputs/File.svelte';
	import Select from '$lib/components/inputs/Select.svelte';
	import FilePreview from '$lib/components/inputs/FilePreview.svelte';

	export let type: string;
	export let name: string;
	export let value: string | number = '';
	export let label: string = '';
	export let placeholder: string = '';
	export let options:Array<string> = [];
	export let selected = '';
	export let files: FileList = {};
	export let section = "";
	export let required = true;

	export let onChange = () => {};
	export let onClick = () => {};
</script>

{#if type == 'text'}
	<Text
		value={String(value)}
		{name}
		{label}
		{placeholder}
		{onChange}
		{required}
	/>
{:else if type == 'textarea'}
	<Textarea value={String(value)} {name} {placeholder} {onChange} {required} />
{:else if type == 'date'}
	<Date
		value={String(value)}
		{name}
		{label}
		{placeholder}
		{onChange}
		{required}
	/>
{:else if type == 'file'}
	<File bind:files {name} {label} {onChange} {required} />
{:else if type == 'filePreview'}
	<FilePreview bind:files {name} {label} {onChange} {options} {section} />
{:else if type == 'select'}
	<Select {options} {selected} {name} {placeholder} {label} {onChange} {onClick} />
{/if}
