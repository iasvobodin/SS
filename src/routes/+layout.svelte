<script>
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
