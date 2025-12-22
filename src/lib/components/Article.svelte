<script lang="ts">
  export let article;
</script>

<article>
	<h1>{article.title}</h1>
	<h2>{article.subtitle}</h2>
	<h3>Published On: {article.date}</h3>

	<div class="hero">
		<img src="/images/{article.hero}" alt={article.hero_alt}>
	</div>

	{#if article.categories.length}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each article.categories as category}
					<li>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<article.Content />
</article>