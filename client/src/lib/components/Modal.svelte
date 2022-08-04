<script lang="ts">
    export let id:string;
    export let opened = false;
    export let type = "clickOutside";
    export let button = "";
    export let extraClass = "";
</script>

{#if button.length}
    <label for={id} class="btn modal-button">{button}</label>

{/if}


{#if type == "clickOutside"}
    <input type="checkbox" id={id} class="modal-toggle" />
    <label for={id} class="modal cursor-pointer {opened ? "modal-open" : ""}">
        <label class="modal-box m-24 p-0 w-3/5 max-w-full relative {extraClass}" for="">
            <div class="p-6">
                <slot />
            </div>
        </label>
    </label>
{:else if type == "click"}
    <input type="checkbox" id={id} class="modal-toggle" />
    <label for={id} class="modal cursor-pointer {opened ? "modal-open" : ""}">
        <div class="modal-box m-24 p-0 w-full max-w-full h-screen {extraClass}">
            <slot />
        </div>
    </label>
{/if}


