<script>
	export let data;
</script>

<h1>Books I've Read</h1>

<div class="motivation">
	<p>
		I have always wanted to give myself a <a href="https://en.wikipedia.org/wiki/Classic_book"
			>Good Books education</a
		> by reading all of the books considered classics, or influential, including contemporary ones.
	</p>
	<p>
		A friend of mine was inspired to start writing books reviews on <a
			href="https://books.troywolters.com/">all of the books that he has read</a
		>. This, in turn, inspired me to undertake a similar project.
	</p>
	<p>
		This is only a list of books that I have since embarked on that journey of self-education
		myself.
	</p>
</div>

<div class="filters"></div>

<div class="book-list">
	{#each data.books as book}
		<section class="book">
			<h2>{book.meta.title}</h2>
			<div class="content">
				<div class="wrapper">
					<div class="book-title">
						<p>By: {book.meta.author}</p>
						<p>Read from: {book.meta.from} - {book.meta.to}</p>
						<p>ISBN: {book.meta.ISBN}</p>
					</div>
					<div class="book-review">
						<ul>
							{#each book.meta.categories as category}
								<li>{category}</li>
							{/each}
						</ul>
						<svelte:component this={book.Content} />
					</div>
				</div>
			</div>
		</section>
	{/each}
</div>

<style lang="scss">
	:root {
		--size-header: 2.25rem;
		--size-accordion-title: 1.25rem;
		--size-accordion-content: 1rem;
		--animation-speed: 100;
		--slide-ease: cubic-bezier(0.86, 0, 0.07, 1);
		--slide-duration: calc(400ms * 100 / var(--animation-speed));
		--slide-delay: calc(450ms * 100 / var(--animation-speed));
		--circle-duration: calc(900ms * 100 / var(--animation-speed));
	}

	*,
	*::before,
	*::after {
		position: relative;
		left: 0;
		top: 0;
		box-sizing: border-box;
	}

	a,
	p,
	h1 {
		margin: 0;
	}

	html {
		height: 100%;
	}

	body {
		background-color: hsl(4, 91%, 60%);
		font-family: Nunito, Arial, Helvetica, sans-serif;
		font-weight: 600;
		margin: 0;
		display: grid;
		place-items: center;
		padding: 2rem 2rem;
		min-height: 100%;
	}

	html,
	body {
		scroll-behavior: smooth;
		scroll-padding-top: 1rem;
	}

	main > h1 {
		font-size: var(--size-header);
		margin-bottom: 1.25rem;
		color: #fff;
	}

	::selection {
		background-color: rgba(0, 0, 0, 0.4);
	}

	.book {
		--circle-x: 1.8rem;
		--circle-y: 0;
		--circle-r: 200%;
		--circle-bg: #fff;
		color: #000;

		background-color: var(--circle-bg);
		max-width: 56ch;
		margin-bottom: 1rem;
		border-radius: min(8px, 0.5rem);

		display: grid;
		grid-template-rows: 0fr 0fr;
		transition-timing-function: var(--slide-ease);
		transition-duration: 200ms, 200ms, var(--slide-duration);
		transition-property: opacity, box-shadow, grid-template-rows;
		transition-delay: 0ms, 0ms, var(--slide-delay);
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
		opacity: 0.9;
	}

	.book:not(:target):hover {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
	}

	.book:not(:target):active {
		opacity: 1;
		box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.3);
	}

	.book,
	.content {
		overflow: hidden;
	}

	.book:target {
		--d: 90deg;
		grid-template-rows: 0fr 1fr;
		transition: grid-template-rows var(--slide-ease) var(--slide-duration) var(--slide-delay);
	}

	.wrapper {
		padding-block: 0 1.05rem;
		padding-inline: 1.25rem;
	}

	.content {
		font-size: var(--size-accordion-content);
		line-height: 140%;
	}

	.content p {
		margin-bottom: 1rem;
	}

	.content a {
		color: currentColor;
		font-weight: 800;
		text-decoration: underline;
	}

	main :last-child,
	.content :last-child {
		margin-bottom: 0;
	}

	.title a {
		padding: 1rem 1.25rem;
		font-size: var(--size-accordion-title);
		font-weight: 800;
		color: currentColor;
		text-decoration: none;
		display: flex;
		flex-direction: row;
		place-items: center;
	}

	.title a::before {
		--chevron-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --%3E%3Cpath fill='white' d='M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z'/%3E%3C/svg%3E");
		content: '';
		left: 0;
		top: 0;
		width: 0.65rem;
		aspect-ratio: 320 / 512;
		display: inline-block;
		margin-right: 0.75rem;
		transform: rotate(var(--d, 0deg));
		transition: transform var(--slide-ease) var(--slide-duration) var(--slide-delay);
		mask-image: var(--chevron-icon);
		mask-size: 100% 100%;
		-webkit-mask-image: var(--chevron-icon);
		-webkit-mask-size: 100% 100%;
		background-color: currentColor;
	}

	.book::before,
	.book::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: var(--circle-bg);
		mix-blend-mode: difference;
		transform-style: preserve-3d;
		transition-timing-function: ease;
		transition-property: opacity, clip-path, visibility;
		pointer-events: none;
		clip-path: circle(var(--r) at var(--circle-x) var(--circle-y));
		border-radius: inherit;
		z-index: 4;
	}

	.book::before {
		--r: 0%;
		transition-delay: var(--circle-duration), var(--circle-duration), 0ms;
		transition-duration: 0ms, var(--circle-duration), 0ms;
		opacity: 0;
	}

	.book:target::before {
		--r: var(--circle-r);
		transition-delay: 0ms, 0ms, 0ms;
		transition-duration: 0ms, var(--circle-duration), 0ms;
		opacity: 1;
	}

	.book::after {
		--r: var(--circle-r);
		transition-delay: 0ms, 0ms, var(--circle-duration);
		transition-duration: 0ms, var(--circle-duration), 0ms;
		visibility: hidden;
		opacity: 1;
	}

	.book:target:after {
		--r: 0%;
		transition-delay: 0ms, 0ms, 0ms;
		transition-duration: 0ms, 0ms, 0ms;
		visibility: visible;
		opacity: 0;
	}

	.title a:focus-visible {
		background-color: hsl(0, 100%, 90%);
		outline: none;
	}

	.book:target .title a:focus-visible {
		background-color: hsl(183, 100%, 93%);
	}
</style>
