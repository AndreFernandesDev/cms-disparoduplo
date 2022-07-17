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
        class="textarea textarea-bordered w-full h-44"
        placeholder={placeholder}
        required
    >{value}</textarea>
</div>