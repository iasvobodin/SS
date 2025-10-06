<script>
	import { onMount } from 'svelte';

	let heroTitle, heroSubtitle, heroButton;

	function scrollToContact() {
		const contactElement = document.getElementById('contact');
		if (contactElement) {
			contactElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<h1 bind:this={heroTitle} class="hero-title">
				<span class="gradient-wrapper">Фотосессия, в которой ты чувствуешь себя собой.</span>
			</h1>
			<p bind:this={heroSubtitle} class="hero-subtitle">
				Без глянца. Без давления. Без масок. Только ты, твоя история и честная фотография.
			</p>
			<button class="cta-button" data-scroll-to="#contact"> Записаться на съёмку </button>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		background: linear-gradient(135deg, #f8f6f3 0%, #ede7e0 100%);
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.hero-content {
		z-index: 2;
		max-width: 800px;
	}

	.hero-title {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 800;
		line-height: 1.1;
		margin-bottom: 2rem;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-family: 'Inter', sans-serif;
		font-size: clamp(1.2rem, 3vw, 1.8rem);
		color: #666;
		margin-bottom: 3rem;
		font-weight: 400;
	}
</style>
