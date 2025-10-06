<script>
	import { onMount } from 'svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Process from '$lib/components/Process.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Packages from '$lib/components/Packages.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initAnimations } from '$lib/utils/animations';

	onMount(() => {
		initAnimations();
	});
</script>

<svelte:head>
	<title>Фотосессия, в которой ты чувствуешь себя собой</title>
	<meta
		name="description"
		content="Фотограф честных портретов. Без глянца, без давления, без масок. Только ты, твоя история и честная фотография."
	/>
</svelte:head>

<div id="smooth-wrapper">
	<div id="smooth-content">
		<Hero />
		<About />
		<Gallery />
		<Process />
		<Testimonials />
		<Packages />
		<Contact />
		<Footer />
	</div>
</div>
