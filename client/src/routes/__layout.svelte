<script lang="ts">
	import '../app.css';

	// Components
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<div class="container mx-auto">
	<Navbar />
	<main class="flex flex-wrap items-start grow">
		<slot />
	</main>
</div>
<Footer />
