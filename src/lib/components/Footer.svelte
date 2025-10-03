<footer class="footer">
	<div class="container">
		<div class="footer-contacts">
			<a href="#">@svobodinaphoto</a>
			<a href="#">Telegram</a>
			<a href="#">svobodinaphoto@gmail.com</a>
		</div>
		<p>&copy; 2025 Настя. Фотограф честных портретов.</p>
	</div>
</footer>

<style>
	.footer {
		background: #2d2d2d;
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.footer-contacts {
		display: flex;
		justify-content: center;
		gap: 3rem;
		margin-bottom: 2rem;
	}

	.footer-contacts a {
		color: white;
		text-decoration: none;
		font-size: 1.1rem;
		transition: opacity 0.3s ease;
		font-family: 'Inter', sans-serif;
		font-weight: 500;
	}

	.footer-contacts a:hover {
		opacity: 0.7;
	}

	.footer p {
		font-family: 'Inter', sans-serif;
		font-weight: 400;
	}

	@media (max-width: 768px) {
		.footer-contacts {
			flex-direction: column;
			gap: 1rem;
		}
	}
</style>
