<script lang="ts">
	export let type: string = 'Primary';
	export let display: boolean = true;
	export let href = "";
	export let extraClass = "";
	export let action = "button";
	export let onClick = () => {};

	// Components
	import Icons from '$lib/components/Icons.svelte';

	$: displaySettings = display ? "opacity-100 z-50" : "opacity-0 -z-50";


</script>

{#if type === 'Primary'}
	<button type={action} on:click={onClick} class="btn btn-primary {displaySettings} {extraClass}"><slot /></button>
{:else if type === 'Delete'}
	<button type={action} on:click={onClick} class="btn btn-error {displaySettings} {extraClass}"><slot /><Icons type="cross"/></button>
{:else if type === 'Edit'}
	<a href={href}><button type={action} on:click={onClick} class="btn btn-secondary {displaySettings} {extraClass}"><slot /><Icons type="edit"/></button></a>
{:else if type === 'Popup'}
	<button type={action} on:click={onClick} class="btn btn-primary fixed transition-all bottom-14 right-7 {displaySettings} {extraClass}"><slot /></button>
{/if}
