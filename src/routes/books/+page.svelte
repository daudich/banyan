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
		<div class="book">
			<h2>{book.meta.title}</h2>
			<p>By: {book.meta.author}</p>
			<p>Read from: {book.meta.from} - {book.meta.to}</p>
			<svelte:component this={book.Content} />
		</div>
	{/each}
</div>
