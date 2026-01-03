<script lang="ts">
  export let article;
</script>

<article>
	<h1>{article.title}</h1>
	<h2>{article.subtitle}</h2>
	
	<div class="hero" title="{article.hero_alt}" style="background-image: url('/images/{article.hero}')"></div>
	
	<div class="date">
		<p><strong>Published On:</strong> {article.date}</p>

		{#if article.update &&	article.update != article.date }
			<p><strong>Updated On:</strong> {article.update}</p>
		{/if}
	</div>
	
	<article.Content />

	{#if article.categories.length}
		<aside>
			<h4><b>Published under:</b></h4>
			<ul class="categories">
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
</article>
