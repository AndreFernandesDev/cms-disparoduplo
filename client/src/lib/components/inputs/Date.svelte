

    <script lang="ts">
	import { onMount } from 'svelte';

    export let name:string;
    export let label: string = "";
    export let value: string = "";
    export let placeholder: string = "";

    let test
    export let handleChange = () => {
        console.log(test);
    };
</script>

<div class="my-4 group">
    {#if label !== ""}
        <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    {/if}
    <div class="relative">
        <input bind:this={test} on:change={handleChange} type="date" value={value} name={name} id={name} class="input input-bordered w-full" placeholder={placeholder} required>
    </div>
</div>
