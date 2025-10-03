<script>
	let contactHeader, contactForm, contactNote;
	let name = '';
	let contact = '';
	let message = '';

	function handleSubmit(event) {
		event.preventDefault();
		alert('Спасибо за заявку! В реальном проекте здесь была бы отправка формы.');
		// В реальном проекте здесь была бы отправка данных на сервер
		name = '';
		contact = '';
		message = '';
	}
</script>

<section class="contact" id="contact">
	<div class="container">
		<h2 bind:this={contactHeader} class="section-header animate-fade-up">
			<span class="gradient-wrapper">Хочешь обсудить съёмку? Напиши мне</span>
		</h2>
		<form bind:this={contactForm} class="contact-form animate-fade-up" on:submit={handleSubmit}>
			<div class="form-group">
				<input type="text" placeholder="Имя" bind:value={name} required />
			</div>
			<div class="form-group">
				<input type="text" placeholder="Телеграм или почта" bind:value={contact} required />
			</div>
			<div class="form-group">
				<textarea placeholder="Коротко о себе (необязательное поле)" bind:value={message}
				></textarea>
			</div>
			<button type="submit" class="cta-button">Отправить</button>
		</form>
		<p bind:this={contactNote} class="contact-note animate-fade-up">
			Ты можешь просто написать мне в Telegram — без обязательств. Я отвечу, расскажу подробнее, и
			ты решишь сама.
		</p>
	</div>
</section>

<style>
	.contact {
		padding: 8rem 0;
		background: #fafafa;
	}

	.contact-form {
		max-width: 600px;
		margin: 0 auto;
	}

	.form-group {
		margin-bottom: 2rem;
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 1.2rem;
		border: 2px solid #e5e5e5;
		border-radius: 10px;
		font-size: 1.1rem;
		transition: border-color 0.3s ease;
		background: white;
		font-family: 'Inter', sans-serif;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #2d2d2d;
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.contact-note {
		text-align: center;
		color: #666;
		font-size: 1.1rem;
		margin-top: 2rem;
		font-family: 'Inter', sans-serif;
	}
</style>
