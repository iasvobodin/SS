<script>
	const packages = [
		{
			title: 'Мини-сессия',
			features: ['1 час', '10 обработанных фото', 'Онлайн-гид по подготовке'],
			price: '6 000 ₽'
		},
		{
			title: 'Полная съёмка',
			features: ['2–2.5 часа', '25+ фото', 'Визуальный референс', 'Помощь с образом'],
			price: '11 000 ₽'
		}
	];

	let packagesHeader;
	let packageElements = [];

	function scrollToContact() {
		const contactElement = document.getElementById('contact');
		if (contactElement) {
			contactElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<section class="packages">
	<div class="container">
		<h2 bind:this={packagesHeader} class="section-header">
			<span class="gradient-wrapper">Съёмка, которую ты выбираешь</span>
		</h2>
		<div class="packages-grid">
			{#each packages as pkg, i}
				<div bind:this={packageElements[i]} class="package" style="animation-delay: {i * 0.2}s">
					<div class="package-header">
						<h3>{pkg.title}</h3>
					</div>
					<div class="package-content">
						<ul class="package-features">
							{#each pkg.features as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
					<div class="package-footer">
						<div class="package-price">{pkg.price}</div>
						<button class="cta-button" data-scroll-to="#contact"> Выбрать </button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.packages {
		padding: 8rem 0;
		background: white;
	}

	.packages-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 3rem;
		max-width: 900px;
		margin: 0 auto;
		align-items: stretch;
	}

	.package {
		background: #fafafa;
		padding: 3rem;
		border-radius: 20px;
		text-align: center;
		transition: transform 0.3s ease;
		display: flex;
		flex-direction: column;
		min-height: 500px;
	}

	.package:hover {
		transform: translateY(-5px);
	}

	.package-header {
		margin-bottom: 2rem;
	}

	.package h3 {
		font-family: 'Manrope', sans-serif;
		font-size: 1.8rem;
		font-weight: 600;
		color: #2d2d2d;
	}

	.package-content {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.package-features {
		list-style: none;
		margin-bottom: 2rem;
		min-height: 200px;
	}

	.package-features li {
		font-family: 'Inter', sans-serif;
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 1.5rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid #eee;
		font-weight: 400;
	}

	.package-features li:last-child {
		border-bottom: none;
	}

	.package-footer {
		margin-top: auto;
	}

	.package-price {
		font-family: 'Manrope', sans-serif;
		font-size: 2rem;
		font-weight: 600;
		color: #2d2d2d;
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.packages-grid {
			grid-template-columns: 1fr;
			max-width: 400px;
		}
	}
</style>
