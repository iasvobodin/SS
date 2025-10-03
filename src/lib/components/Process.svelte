<script>
	const processItems = [
		'Без спешки. Мы не гонимся за количеством кадров.',
		'Я помогаю с позами, если нужно. Если не нужно — не мешаю.',
		'Можно принести свой плейлист или молчать. Как тебе комфортно.',
		'Хочешь — поговорим, хочешь — посидим в тишине между кадрами.',
		'Я не оцениваю, не сравниваю, не "делаю красиво". Я вижу тебя — и показываю такой, какая ты есть.'
	];

	let processHeader;
	let processElements = [];
</script>

<section class="process">
	<div class="container">
		<h2 bind:this={processHeader} class="section-header animate-fade-up">
			<span class="gradient-wrapper">Как это будет? Просто и по-настоящему.</span>
		</h2>
		<div class="process-list">
			{#each processItems as item, i}
				<div
					bind:this={processElements[i]}
					class="process-item animate-fade-left"
					style="animation-delay: {i * 0.1}s"
				>
					{item}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.process {
		padding: 8rem 0;
		background: white;
	}

	.process-list {
		max-width: 800px;
		margin: 0 auto;
	}

	.process-item {
		font-family: 'Inter', sans-serif;
		font-size: 1.4rem;
		color: #666;
		margin-bottom: 2rem;
		padding-left: 2rem;
		position: relative;
		font-weight: 400;
	}

	.process-item::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #2d2d2d;
		font-size: 1.5rem;
	}
</style>
