<script>
	import { sendToTelegram } from '$lib/utils/telegram.js';

	let contactHeader = $state();
	let contactForm = $state();
	let contactNote = $state();

	let name = $state('');
	let contact = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let submitStatus = $state({ show: false, success: false, message: '' });

	async function handleSubmit(event) {
		event.preventDefault();

		// Предотвращаем повторную отправку
		if (isSubmitting) return;

		isSubmitting = true;
		submitStatus = { show: false, success: false, message: '' };

		try {
			// Отправляем данные в Telegram
			const result = await sendToTelegram({
				name: name,
				contact: contact,
				message: message
			});

			if (result.success) {
				// Успешная отправка
				submitStatus = {
					show: true,
					success: true,
					message: 'Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время! 💚'
				};

				// Очищаем форму
				name = '';
				contact = '';
				message = '';

				// Скрываем сообщение через 5 секунд
				setTimeout(() => {
					submitStatus = { show: false, success: false, message: '' };
				}, 5000);
			} else {
				// Ошибка отправки
				submitStatus = {
					show: true,
					success: false,
					message: result.message
				};
			}
		} catch (error) {
			console.error('Form submission error:', error);
			submitStatus = {
				show: true,
				success: false,
				message: 'Произошла ошибка. Пожалуйста, напишите мне напрямую в Telegram: @svobodinaphoto'
			};
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section class="contact" id="contact">
	<div class="container">
		<h2 bind:this={contactHeader} class="section-header">
			<span class="gradient-wrapper">Хочешь обсудить съёмку? Напиши мне</span>
		</h2>

		{#if submitStatus.show}
			<div
				class="submit-message"
				class:success={submitStatus.success}
				class:error={!submitStatus.success}
			>
				{submitStatus.message}
			</div>
		{/if}

		<form bind:this={contactForm} class="contact-form" onsubmit={handleSubmit}>
			<div class="form-group">
				<input type="text" placeholder="Имя" bind:value={name} disabled={isSubmitting} required />
			</div>
			<div class="form-group">
				<input
					type="text"
					placeholder="Телеграм (@username) или почта"
					bind:value={contact}
					disabled={isSubmitting}
					required
				/>
			</div>
			<div class="form-group">
				<textarea
					placeholder="Коротко о себе (необязательное поле)"
					bind:value={message}
					disabled={isSubmitting}
				></textarea>
			</div>
			<button type="submit" class="cta-button" disabled={isSubmitting}>
				{isSubmitting ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
		<p bind:this={contactNote} class="contact-note">
			Ты можешь просто написать мне в <a
				href="https://t.me/svobodinaphoto"
				target="_blank"
				rel="noopener noreferrer">Telegram</a
			> — без обязательств. Я отвечу, расскажу подробнее, и ты решишь сама.
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

	.form-group input:disabled,
	.form-group textarea:disabled {
		opacity: 0.6;
		cursor: not-allowed;
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

	.cta-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none !important;
	}

	.submit-message {
		max-width: 600px;
		margin: 0 auto 2rem;
		padding: 1.5rem;
		border-radius: 10px;
		text-align: center;
		font-family: 'Inter', sans-serif;
		font-size: 1.1rem;
		animation: slideDown 0.3s ease-out;
	}

	.submit-message.success {
		background: #e8f5e9;
		color: #2e7d32;
		border: 2px solid #4caf50;
	}

	.submit-message.error {
		background: #ffebee;
		color: #c62828;
		border: 2px solid #f44336;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.contact-note {
		text-align: center;
		color: #666;
		font-size: 1.1rem;
		margin-top: 2rem;
		font-family: 'Inter', sans-serif;
	}

	.contact-note a {
		color: #2d2d2d;
		font-weight: 600;
		text-decoration: underline;
		transition: opacity 0.3s ease;
	}

	.contact-note a:hover {
		opacity: 0.7;
	}
</style>
