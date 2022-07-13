

    <script lang="ts">
	import { onMount } from 'svelte';

    export let name:string;
    export let label: string = "";
    export let placeholder: string = "";

    export let handleChange = () => {};

    // Reasign index to make it on top of popup content.
    onMount(() => {
		const datepickers = Array.from(
			document.getElementsByClassName(
				'datepicker-dropdown'
			) as HTMLCollectionOf<HTMLElement>
		);
		for (let i = 0; i < datepickers.length; i++) {
			datepickers[i].style.zIndex = "99";
		}
	});
</script>

<div class="my-4 group">
    {#if label !== ""}
        <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    {/if}
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input on:change={handleChange} name={name} id={name} datepicker="" datepicker-autohide="" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder={placeholder}>
    </div>
</div>
