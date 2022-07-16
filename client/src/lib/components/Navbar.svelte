<script lang="ts">
	import Form from './Form.svelte';
	import Modal from '$lib/components/Modal.svelte';
</script>

<nav class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost normal-case text-xl">DisparoDuplo</a>
		</div>
		<div class="flex-none">
		<Modal button="Criar Album" id="newAlbum">
			<Form />
		</Modal>
	</div>
</nav>