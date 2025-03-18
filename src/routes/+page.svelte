<div class="container">
	<div class="text">
		<h1>Hi, my name is <strong>Banyan</strong></h1>
		<p>I am a clean modern theme developed for SvelteKit.</p>
		<p>
			I was originally developed as a theme for a personal website, but I can quickly be adapted for
			almost any other use case that you can think of.
		</p>
	</div>
	<div class="image">
		<!-- https://www.flickr.com/photos/matthewpaulson/8743231744/in/photostream/ -->
		<img src="/images/banyan.jpg" alt="A banyan tree with hanging roots by Matthew Paulson." />
	</div>
</div>

<style lang="scss">
	@use '../lib/styles/base/vars';
	@use '../lib/styles/utils/functions' as _;

	// Container styles
	.container {
		display: flex;
		flex-direction: row; // side by side layout

		// Ensure each child gets 50% of the width
		> .text,
		> .image {
			width: 50%;
			padding: calc(#{_.size('wholeNote')} * 2);
		}
	}

	h1 {
		font-size: clamp(1.8rem, calc(1rem + 3vw), 3.5rem);

		strong {
			color: _.palette(vars.$light-theme, 'ink-h1');
		}
	}

	p {
		font-size: clamp(1.2rem, calc(0.6rem + 2vw), 1.8rem);
	}
</style>
