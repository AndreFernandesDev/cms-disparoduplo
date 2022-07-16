<script lang="ts">
	import '../app.css';

	// Components
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<Navbar />
<main class="container mx-auto flex flex-wrap items-start grow">
	<slot />
</main>
<Footer />
