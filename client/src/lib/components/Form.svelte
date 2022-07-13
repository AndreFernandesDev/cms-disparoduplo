<script lang="ts">
	import { mutationStore, getContextClient } from '@urql/svelte';
	import { mutations } from '$lib/graphql/albums';
	import Input from '$lib/components/inputs/Input.svelte';

	var client = getContextClient();
	let isButtonEnabled = true;

	let form:HTMLFormElement;
	let files:FileList;
	let previewFiles = [];

	$: {
		console.log(previewFiles);
	}

	// Preview all media;
	const showFiles = () => {
		if(!files) return [];
		previewFiles = [];

		Object.keys(files).map((f) => {
			const currentFile = files[parseInt(f)];
			console.log(currentFile);
			const reader = new FileReader();
			reader.readAsDataURL(currentFile);

			reader.onload = e => {
				previewFiles = [...previewFiles, e.target.result];
				console.log(previewFiles);
			}
		})
	}

	// Store images in Google Cloud.
	const handleFiles = (e) => {
		console.log(e);
	}
	

	// Store images url in array.
	const storeMedia = () => {
		if(!files) return [];
		Object.keys(files).map((f) => {
			const currentFile = files[parseInt(f)];
			console.log(currentFile);
		})
	}

	// Store form in Database.
	const handleSubmit = () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());
		let images = storeMedia()

		// mutationStore({
		// 	client: client,
		// 	query: mutations.add,
		// 	variables: {
		// 		name: json.name,
		// 		date: new Date(String(json.date)).valueOf(),
		// 		location: json.location,
		// 		description: json.description
		// 	}
		// });

		form.reset();
	}

	// Check if there are any missing fields.
	const handleChange = () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		const isEmpty = Object.values(json).some(x => x === null || x === '');

		isButtonEnabled = isEmpty;
	}
</script>
<form bind:this={form} on:submit|preventDefault={handleSubmit} on:change={handleChange}>
	<Input type="text" name="name" placeholder="Alexandre & Jessica..." />
	<Input type="textarea" name="description" placeholder="Sobre o evento..." />
	<Input type="text" name="location" placeholder="Madeira..." />
	<Input type="date" name="date" placeholder="Dia do evento..." />
	<Input handleChange={showFiles} bind:files={files} type="file" name="media" />

	<div class="grid xl:grid-cols-2 xl:gap-6" />
	<!-- Modal footer -->
	<div
		class="flex items-center py-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
	>
		<button
			data-modal-toggle={"newAlbum"}
			type="submit"
			class="text-white {isButtonEnabled ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700" } dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={isButtonEnabled}
			>Salvar</button
		>
	</div>
</form>

<div class="flex flex-wrap gap-4 items-center">
	{#each previewFiles as media}
		<img src={media} alt="Preview" class="w-5/8 h-40 object-contain b-2" />
	{/each}
</div>
