<script>
	let aboutTitle, aboutText1, aboutText2, aboutText3, aboutImage;
	let mobileTitle, mobileText1, mobileText2, mobileText3, mobileImage;
</script>

<section class="about">
	<div class="container">
		<!-- Desktop version -->
		<div class="about-content about-desktop">
			<div class="about-text">
				<h2 bind:this={aboutTitle}>
					<span class="gradient-wrapper">Привет! Меня зовут Настя</span>
				</h2>
				<p bind:this={aboutText1}>Я фотограф, который работает с реальными людьми.</p>
				<p bind:this={aboutText2}>
					Я снимаю девушек, которые хотят увидеть себя не как «проект», а как живую, настоящую
					личность.
				</p>
				<p bind:this={aboutText3}>
					У меня нет цели «перекроить» тебя. Моя цель — помочь тебе увидеть, что ты прекрасна. Уже
					сейчас.
				</p>
			</div>
			<div bind:this={aboutImage} class="about-image">
				<span>Портрет фотографа<br />с камерой</span>
			</div>
		</div>

		<!-- Mobile version -->
		<div class="about-content about-mobile">
			<h2 bind:this={mobileTitle}>
				<span class="gradient-wrapper">Привет! Меня зовут Настя</span>
			</h2>
			<div bind:this={mobileImage} class="about-image">
				<span>Портрет фотографа<br />с камерой</span>
			</div>
			<div class="about-text-mobile">
				<p bind:this={mobileText1}>Я фотограф, который работает с реальными людьми.</p>
				<p bind:this={mobileText2}>
					Я снимаю девушек, которые хотят увидеть себя не как «проект», а как живую, настоящую
					личность.
				</p>
				<p bind:this={mobileText3}>
					У меня нет цели «перекроить» тебя. Моя цель — помочь тебе увидеть, что ты прекрасна. Уже
					сейчас.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		padding: 8rem 0;
		background: white;
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6rem;
		align-items: center;
	}

	.about-text {
		display: flex;
		flex-direction: column;
	}

	.about-text h2,
	.about-mobile h2 {
		font-family: 'Manrope', sans-serif;
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 700;
		margin-bottom: 2rem;
		letter-spacing: -0.01em;
	}

	.about-text p,
	.about-text-mobile p {
		font-family: 'Inter', sans-serif;
		font-size: 1.3rem;
		color: #666;
		margin-bottom: 1.5rem;
		font-weight: 400;
	}

	.about-image {
		height: 500px;
		background: linear-gradient(45deg, #e8e2d5, #f0ebe4);
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
		font-size: 1.2rem;
		font-family: 'Inter', sans-serif;
		text-align: center;
	}

	/* Hide mobile version on desktop */
	.about-mobile {
		display: none;
	}

	/* Show desktop version */
	.about-desktop {
		display: grid;
	}

	/* Responsive */
	@media (max-width: 768px) {
		/* Hide desktop version on mobile */
		.about-desktop {
			display: none !important;
		}

		/* Show mobile version */
		.about-mobile {
			display: flex !important;
			flex-direction: column;
			align-items: stretch;
		}

		.about-mobile h2 {
			margin-bottom: 3rem;
			text-align: left;
		}

		.about-mobile .about-image {
			width: 100%;
			height: 350px;
			margin-bottom: 2rem;
		}
	}
</style>
