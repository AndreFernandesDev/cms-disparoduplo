<script lang="ts">
    export let path:string;
    export let name:string;
    export let modalId:string;
    export let featured:boolean;
    export let section = true;
    export let onClick = () => {};
    export let onClickDelete = () => {};
    export let onClickFeatured = () => {};
    export let onClickSection = () => {};

    // Components
    import Button from "$lib/components/Button.svelte";

</script>

<!-- IMAGE -->
<div class="relative rounded-xl p-2 w-1/3 h-96 drop-shadow-2xl">
    <label on:click={onClick} for={modalId} class="modal-button w-full h-full p-0 border-0">
        <img src={path} alt={name} class="modal-button w-full h-full object-cover rounded-lg cursor-pointer"/>
    </label>
    <div class="absolute bottom-4 right-4 flex gap-4">
        {#if section}
            <Button onClick={onClickSection}>Divisao</Button>
        {/if}
        
        {#if !featured}
            <Button onClick={onClickFeatured}>Tornar Capa</Button>
            <Button type="Delete" onClick={onClickDelete} ></Button>
        {/if}
    </div>
</div>