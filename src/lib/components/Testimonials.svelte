<script>
	const testimonials = [
		{
			text: '«Я боялась камеры. А потом увидела фото и подумала: вау, неужели это я?»',
			author: '— Аня, 24'
		},
		{
			text: '«Это была не просто фотосессия. Это было как разговор с собой»',
			author: '— Света, 26'
		},
		{
			text: '«Я увидела в себе женщину. Не маму. Не сотрудницу. Женщину. Спасибо»',
			author: '— Катя, 30'
		}
	];

	let testimonialsHeader;
	let testimonialElements = [];
</script>

<section class="testimonials">
	<div class="container">
		<h2 bind:this={testimonialsHeader} class="section-header">
			<span class="gradient-wrapper">Что говорят девушки после съёмки</span>
		</h2>
		<div class="testimonials-grid">
			{#each testimonials as testimonial, i}
				<div
					bind:this={testimonialElements[i]}
					class="testimonial"
					style="animation-delay: {i * 0.2}s"
				>
					<div class="testimonial-photo"></div>
					<p class="testimonial-text">{testimonial.text}</p>
					<p class="testimonial-author">{testimonial.author}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.testimonials {
		padding: 8rem 0;
		background: #fafafa;
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 3rem;
	}

	.testimonial {
		background: white;
		padding: 3rem;
		border-radius: 20px;
		text-align: center;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
	}

	.testimonial-photo {
		width: 80px;
		height: 80px;
		background: linear-gradient(45deg, #e8e2d5, #f0ebe4);
		border-radius: 50%;
		margin: 0 auto 2rem;
	}

	.testimonial-text {
		font-family: 'Inter', sans-serif;
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1rem;
		font-style: italic;
		font-weight: 400;
	}

	.testimonial-author {
		font-family: 'Inter', sans-serif;
		font-size: 1rem;
		color: #999;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.testimonials-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
