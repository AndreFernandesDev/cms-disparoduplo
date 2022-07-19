<script lang="ts">
    export let label = "";
    export let preview = true;
    export let name:string;
    export let files:FileList;
    export let onChange = () => {};

    // Components
    import Image from '$lib/components/Image.svelte';
    import Modal from '$lib/components/Modal.svelte';

    interface PreviewFile {
		file: File,
		blurb: string,
		name: string,

	}

    $: (() => {
        renderFiles();
        console.log(files)
    })()



    let previewFiles:Array<PreviewFile> = [];
    let activeImg = {
		path: '',
		name: ''
	};

    const renderFiles = () => {
		if(!files) return [];
		previewFiles = [];

		Object.keys(files).forEach((f) => {
			const currentFile = files[parseInt(f)];
			const reader = new FileReader();
			reader.readAsDataURL(currentFile);

			reader.onload = e => {
				previewFiles = [...previewFiles, {file: currentFile, blurb: String(e.target ? e.target.result : ""), name: currentFile.name}];
			}
		})
	}

    const handleImagePreview = (path: string, name: string) => {
		activeImg = {
			path: path,
			name: name
		}
	}

</script>

<div class="w-full">
    {#if label !== ""}
        <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            for={name}>{label}</label
        >
    {/if}
    <input
        class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id={name}
        name={name}
        type="file"
        accept="image/png, image/gif, image/jpeg, video/mp4, video/x-m4v, video/*"
        multiple
        bind:files={files}
        on:change={onChange}
    />
</div>
{#if preview && files.length}
    <section class="flex flex-wrap w-full gap-8 mt-12">
        <!-- Preview Image FullScreen -->
        <Modal type="click" id="newImgPreview" extraClass="bg-black">
				<img for="my-modal" src={activeImg.path} alt={activeImg.name} class="modal-button w-full h-full object-contain rounded-md"/>
        </Modal>
        {#each previewFiles as media}
            <Image modalId="newImgPreview" onClick={() => handleImagePreview(media.blurb, media.name)} path={media.blurb} name={media.name} featured={true} />
        {/each}
    </section>
{/if}