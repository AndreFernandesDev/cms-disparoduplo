<script lang="ts">
	import {
		mutations,
		MutationTypes,
		MutationActions,
		query,
		Query,
		fetchData,
	} from '$lib/utilities/db';
	import { isEqual, fromUnix, toUnix } from '$lib/utilities/utilities';
	import {
		deleteMedia,
		storeMediaData,
		updateFeatured,
		getSections,
		groupMedia,
		checkMediaSection
	} from '$lib/utilities/manageMedia';
	import { onMount } from 'svelte';

	// Stores
	import albums from '$lib/stores/albums';
	import { page } from '$app/stores';

	// Components
	import Image from '$lib/components/Image.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/inputs/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import axios from 'axios';
import { init } from 'svelte/internal';

	interface Album {
		[key: string]: any;
	}

	interface Media {
		[key: string]: any;
	}

	let form: HTMLFormElement;
	let files: FileList;
	$: filesSection = "";
	const id = $page.params.id;
	let toDeleteMedia: Media = [];
	let toFeaturedMedia = { id: '', oldFeaturedId: '' };
	let displayUpdateBtn = false;
	let displaySectionModal = false;
	let displayImageSectionModal = false;
	$: imageOnEditIndex = "";
	let sections:Array<string> = [];
	$: mediaBySection = {};

	let initialAlbum = {};
	let activeImg = {
		path: '',
		name: '',
	};
	let album: Album = {
		name: '',
		description: '',
		location: '',
		password: '',
		date: 0,
		featured: {
			path: '',
			section: '',
		},
		media: [
			{
				path: '',
				name: '',
				section: '',
			},
		],
	};

	onMount(async () => {
		if (!$albums.length) {
			const res = await fetchData(query(Query.all), {});
			albums.set(res.data.albums);
		}
		album = $albums.filter((item: Album) => item.id === id)[0];
		initialAlbum = { ...album, media: [...album.media] };

		sections = getSections(album.media);
		mediaBySection = groupMedia(album.media);
	});



	const showUpdateBtn = () => {
		if (!isEqual(album, initialAlbum) || files.length) {
			displayUpdateBtn = true;
		} else {
			displayUpdateBtn = false;
		}
	};

	$: handleFormChange = (e: KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		const key = String(target.name);
		const value: string | number = target.value;
		album[key] = value;

		showUpdateBtn();
	};

	const handleImagePreview = (path: string, name: string) => {
		activeImg = {
			path: path,
			name: name,
		};
	};

	const handleSubmit = async () => {
		const formData = new FormData(form);
		let json = Object.fromEntries(formData.entries());

		// API Parameters
		const mutation = mutations(MutationTypes.album, MutationActions.update);
		const variables = {
			id: id,
			name: json.name,
			date: toUnix(String(json.date)),
			location: json.location,
			description: json.description ? json.description : '',
			password: json.password ? json.password : '',
		};

		const res = await fetchData(mutation, variables);

		// Media
		// ---
		// Add
		if (files.length) {
			const newMedia = await storeMediaData(id, files, '', filesSection);
			album.media = [...album.media, ...newMedia];
		}
		// Delete
		if (toDeleteMedia.length) {
			await deleteMedia(id, toDeleteMedia);
		}
		// Update Featured
		if (toFeaturedMedia.id && toFeaturedMedia.oldFeaturedId) {
			await updateFeatured(toFeaturedMedia.id, toFeaturedMedia.oldFeaturedId);
		}

		// Update Section
		checkMediaSection(album.media, initialAlbum.media);
		

		// Reset all internal variables and fields
		files = [];
		const fieldInput = document.getElementById('newMediaUpload');
		if (fieldInput) fieldInput.value = [];

		toDeleteMedia = [];

		initialAlbum = { ...album };

		sections = getSections(album.media);
		mediaBySection = groupMedia(album.media);
		filesSection = "";

		showUpdateBtn();

		// Update Landing Page
		axios
			.post('https://api.netlify.com/build_hooks/62e468b2c29a8d10a253d446')
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	};

	const handleDelete = async (id: string, path: string) => {
		if (!id) return null;

		album.media = album.media.filter((media: Media) => media.id !== id);
		toDeleteMedia.push({ id: id, path: path });
		showUpdateBtn();
	};

	const handleFeatured = async (id: string, path: string) => {
		if (!id) return null;

		const media = album.media.map((media: Media) => {
			if (media.id === id) {
				media.featured = true;
			} else if (media.id === album.featured.id) {
				media.featured = false;
			}
			return media;
		});

		const featured = {
			id: id,
			path: path,
		};

		// Update Internal
		toFeaturedMedia = {
			id: id,
			oldFeaturedId: album.featured.id,
		};

		album = { ...album, media: media, featured: featured };

		showUpdateBtn();
	};

	// Open Section Modal for new images.
	const handleFiles = () => {
		displaySectionModal = true;
		showUpdateBtn();
	}

	// Record changes made on new images section.
	const handleFilesSection = (value: string, updatedSections: string[]) => {
		sections = updatedSections;
		files = files;
		filesSection = value;
		displaySectionModal = false;
	}

	// Record changes made on section of image
	const handleUpdateSection = (value: string, updatedSections: string[]) => {
		displayImageSectionModal = true;
		sections = updatedSections;
		album.media = album.media.map((media: Media, index: string) => index == imageOnEditIndex ? {...media, section: value} : media);
		displayImageSectionModal = false;

		sections = getSections(album.media);
		mediaBySection = groupMedia(album.media);

		showUpdateBtn();
	}

	// Open Section Modal per Image
	const handleImageModal = (fileId: string) => {
		for (let i = 0; i < album.media.length; i++) {
			const media = album.media[i];
			if(media.id === fileId) {
				imageOnEditIndex = String(i);
			}
			
		}

		displayImageSectionModal= true;
	}

</script>

{#if album}
	<!-- SECTION MODAL FOR NEW IMAGES -->
	<Modal id="selectSection" opened={displaySectionModal}>
		<div class="flex flex-col">
			<h2 class="text-xl mb-3">Escolha uma divisao para as suas novas fotos</h2>
			<form class="flex flex-col w-full">
				<Input type="select" name="sectionSelector" options={sections} selected={filesSection} placeholder="Escolha uma divisao" label="Divisoes disponiveis" onClick={handleFilesSection} />
			</form>
		</div>
	</Modal>	

	<form
		class="w-full"
		bind:this={form}
		on:submit|preventDefault={handleSubmit}
		on:change={handleFormChange}
	>
		<!-- NEW MEDIA UPLOAD -->
		<section class="flex flex-wrap items-stretch w-full mt-6">
			<Heading type="h1">Adicionar multimedia</Heading>
			<Input
				onChange={handleFiles}
				options={sections}
				selected={filesSection}
				bind:files
				type="filePreview"
				name="newMediaUpload"
			/>

			<!-- FILES SECTION -->
			{#if filesSection.length}
				<div class="w-2/4 flex flex-col mt-12">
					<h2 class="text-xl">Divisao das novas fotos</h2>
					<form class="flex flex-col w-full">
						<Input type="select" name="sectionSelector" options={sections} selected={filesSection} placeholder="Escolha uma divisao" onClick={handleFilesSection} />
					</form>
				</div>
			{/if}
		</section>

		<!-- SETTINGS -->
		<section class="flex flex-wrap items-stretch w-full ">
			<Heading type="h1">Alterar album</Heading>
			<!-- FORM -->
			<div class="flex flex-col w-3/5 pr-12">
				<Input
					value={String(album.name)}
					type="text"
					name="name"
					placeholder="Nome..."
				/>
				<Input
					value={String(album.password)}
					type="text"
					name="password"
					placeholder="Senha..."
					required={false}
				/>
				<Input
					value={String(album.description)}
					type="textarea"
					name="description"
					placeholder="Sobre o evento..."
					required={false}
				/>
				<Input
					value={album.location}
					type="text"
					name="location"
					placeholder="Local..."
				/>
				<Input
					value={String(fromUnix(album.date))}
					type="date"
					name="date"
					placeholder="Dia do evento..."
				/>
				<Button action="submit" type="Popup" display={displayUpdateBtn}
					>Confirmar</Button
				>
			</div>
			<!-- FEATURED IMAGE -->
			<img
				src={album.featured.path}
				alt=""
				class="w-2/5 h-96 object-cover rounded-md"
			/>
		</section>

	</form>

	<!-- MEDIA -->
	<section class="flex flex-wrap w-full">
		<Heading type="h1">Fotos & Videos</Heading>

		{#if album.media && album.media.length}

			<!-- SHOW IMAGE FULL SCREEN -->
			<Modal type="click" id="fullImg" extraClass="bg-black">
				<img
					for="my-modal"
					src={activeImg.path}
					alt={activeImg.name}
					class="modal-button w-full h-full object-contain rounded-md"
				/>
			</Modal>

			<!-- SHOW SECTION MODAL PER IMAGE -->
			<Modal id="selectSectionImage" opened={displayImageSectionModal}>
				<label for="selectSectionImage" class="btn btn-sm btn-circle absolute right-2 top-2" on:click={(e) => {displayImageSectionModal = false; e.target.click()}}>✕</label>
				<div class="flex flex-col">
					<h2 class="text-xl mb-3">Altera a divisao da foto</h2>
					<form class="flex flex-col w-full">
						<Input type="select" name="sectionSelector" placeholder="Escolhe uma divisao" options={sections} selected={imageOnEditIndex ? album.media[imageOnEditIndex].section === null ? "" : album.media[imageOnEditIndex].section : ""} label="Divisoes disponiveis" onClick={handleUpdateSection} />
					</form>
				</div>
			</Modal>

			<!-- SHOW IMAGES PER SECTION -->
			{#each Object.keys(mediaBySection) as albumName}
				<Heading type="h1">{albumName}</Heading>
				{#each mediaBySection[albumName] as file}
					{#if file.featured === false || toFeaturedMedia.id !== file.id}
						<Image
							modalId="fullImg"
							onClickFeatured={() => handleFeatured(file.id, file.path)}
							onClickDelete={() => handleDelete(file.id, file.path)}
							onClick={() => handleImagePreview(file.path, file.name)}
							onClickSection={() => handleImageModal(file.id)}
							featured={false}
							path={file.path}
							name={file.name}
						/>
					{:else}
						<Image
							modalId="fullImg"
							onClickFeatured={() => handleFeatured(file.id, file.path)}
							onClickDelete={() => handleDelete(file.id, file.path)}
							onClick={() => handleImagePreview(file.path, file.name)}
							onClickSection={() => handleImageModal(file.id)}
							featured={true}
							path={file.path}
							name={file.name}
						/>
					{/if}
				{/each}
			{/each}
		{/if}
	</section>
{/if}
