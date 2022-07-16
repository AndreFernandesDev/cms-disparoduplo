<script lang="ts">
    export let name:string;
    export let label: string = "";
    export let value: string = "";
    export let placeholder: string = "";
    
    export let handleChange = () => {};
</script>

<div  class="relative z-0 w-full my-4 group">
    {#if label !== ""}
        <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    {/if}
    <input on:change={handleChange} type="text" value={value} name={name} id={name} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required>
</div>