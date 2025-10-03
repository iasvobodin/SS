<script>
	const galleryItems = [
		'Портрет девушки\nестественная улыбка',
		'Задумчивый взгляд\nу окна',
		'Смех на улице\nживые эмоции',
		'Нежный портрет\nв студии',
		'Прогулка в парке\nестественный свет',
		'Домашняя атмосфера\nрасслабленность',
		'Чёрно-белый портрет\nглубина взгляда',
		'Солнечный день\nискренняя радость',
		'В кафе\nобычный момент',
		'Вечерний свет\nмягкие тени'
	];

	let galleryHeader, galleryCaption;
	let galleryElements = [];
</script>

<section class="gallery">
	<div class="container">
		<h2 bind:this={galleryHeader} class="section-header animate-fade-up">
			<span class="gradient-wrapper">Вот какими могут быть твои фотографии</span>
		</h2>
		<div class="gallery-grid">
			{#each galleryItems as item, i}
				<div
					bind:this={galleryElements[i]}
					class="gallery-item animate-fade-up"
					style="animation-delay: {i * 0.1}s"
				>
					{item}
				</div>
			{/each}
		</div>
		<p bind:this={galleryCaption} class="gallery-caption animate-fade-up">
			Все фото — обычные девушки, каждая со своей историей. Как и ты.
		</p>
	</div>
</section>

<style>
	.gallery {
		padding: 8rem 0;
		background: #fafafa;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.gallery-item {
		aspect-ratio: 4/5;
		background: linear-gradient(135deg, #e8e2d5, #f0ebe4, #d4c4b0);
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
		font-size: 1.1rem;
		font-family: 'Inter', sans-serif;
		text-align: center;
		transition: transform 0.3s ease;
		white-space: pre-line;
	}

	.gallery-item:hover {
		transform: translateY(-5px) scale(0.95);
	}

	.gallery-caption {
		text-align: center;
		font-size: 1.2rem;
		color: #666;
		font-style: italic;
		font-family: 'Inter', sans-serif;
	}
</style>
