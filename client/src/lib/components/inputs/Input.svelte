<script lang="ts">
    // Types of Input
    import Text from '$lib/components/inputs/Text.svelte';
	import Textarea from '$lib/components/inputs/Textarea.svelte';
    import Date from '$lib/components/inputs/Date.svelte';
    import File from '$lib/components/inputs/File.svelte';
    import FilePreview from '$lib/components/inputs/FilePreview.svelte';

    export let type:string;
    export let name:string;
    export let value: string | number = "";
    export let label: string = "";
    export let placeholder: string = "";
    export let files:FileList = {};

    export let onChange = () => {};

    
</script>

{#if type == "text"}
    <Text value={String(value)} name={name} label={label} placeholder={placeholder} onChange={onChange} />
{:else if type == "textarea"}
    <Textarea value={String(value)} name={name} placeholder={placeholder} onChange={onChange} />
{:else if type == "date"}
    <Date value={String(value)} name={name} label={label} placeholder={placeholder} onChange={onChange} />
{:else if type == "file"}
    <File bind:files={files} name={name} label={label} onChange={onChange} />
{:else if type == "filePreview"}
    <FilePreview bind:files={files} name={name} label={label} onChange={onChange} />
{/if}

