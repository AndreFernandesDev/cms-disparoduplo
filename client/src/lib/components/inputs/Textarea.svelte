<script lang="ts">
    export let name:string;
    export let value: string = "";
    export let placeholder: string = "";

    export let handleChange = () => {};
</script>
<div class="relative z-0 w-full my-4 group">
    <textarea
        on:change={handleChange}
        id={name}
        name={name}
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
    >{value}</textarea>
</div>