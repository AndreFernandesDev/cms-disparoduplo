<script lang="ts">
    export let name:string;
    export let label: string = "";
    export let value: string = "";
    export let placeholder: string = "";
    
    export let onChange = () => {};
</script>

<div  class="relative z-0 w-full my-4 group">
    {#if label !== ""}
        <label for={name} class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    {/if}
    <input on:change={onChange} type="text" value={value} name={name} id={name} class="input input-bordered w-full" placeholder={placeholder} required>
</div>