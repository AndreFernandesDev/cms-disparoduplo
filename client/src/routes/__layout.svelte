<script lang="ts">
	import '../app.css';

	// Components
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<Navbar />
<main class="container flex flex-wrap items-start content-start mx-auto">
	<slot />
</main>
<Footer />
