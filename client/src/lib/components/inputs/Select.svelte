<script lang="ts">
import Button from "$lib/components/Button.svelte";
import Input from "./Input.svelte";

	export let name: string;
	export let label: string = '';
    export let placeholder = "";
    export let options:Array<string> = [];
    export let selected = '';
	export let required = true;

	export let onChange = () => {};
    export let onClick = () => {};

    $: currentOptions = options;

    let enableNewOption = false;
    let input = "";

    const handleView = () => {
        enableNewOption = !enableNewOption;
    }

    const handleInput = (e) => {
        input = e.target ? e.target.value : ""
    }

    const updateOptions = (e) => {
        currentOptions = [...currentOptions, input]
        input = "";
        enableNewOption = false;
    }

    const handleSelect = (e) => {
        onChange(e);

        selected = e.target.value;
    }

    const handleClick = () => {
        onClick(selected, currentOptions);
    }

    console.log(selected)

</script>

<div class="relative z-0 w-full my-4 group">
    <!-- INPUT -->
    {#if enableNewOption}
            <label
                for={name}
                class="block mb-0 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Adicionar nova divisao</label
            >
        <Input type="text" placeholder="Nome..." name="newOption" onChange={handleInput}/>
        <div class="mt-6 w-full flex justify-between">
            <Button extraClass="btn-secondary text-xs" onClick={handleView}>Voltar atras</Button>
            <Button extraClass="text-xs {input.length ? "" : "btn-disabled"}" onClick={updateOptions}>Confirmar</Button>
        </div>
    <!-- SELECT -->
    {:else}
        {#if label !== ''}
            <label
                for={name}
                class="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >{label}</label
            >
        {/if}
        <select class="select select-bordered w-full" on:change={handleSelect} required={required}>
            {#if !selected || !selected.length || selected == null}
                <option disabled selected>{placeholder}</option>
            {/if}
            {#each currentOptions as opt}
                {#if opt !== null}
                    {#if selected === opt}
                        <option value={opt} name={opt} selected>{opt}</option>
                    {:else}
                        <option value={opt} name={opt}>{opt}</option>
                    {/if}    
                {/if}
            {/each}
        </select>
        <div class="mt-6 w-full flex justify-between">
            <Button extraClass="btn-secondary text-xs" onClick={handleView}>Adicionar nova opcao</Button>
            <Button extraClass="text-xs {selected ? selected.length ? "" : "btn-disabled" : "btn-disabled"}" onClick={handleClick}>Confirmar</Button>
        </div>
    {/if}

</div>
