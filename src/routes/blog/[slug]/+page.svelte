<script>
	export let data;
	const { title, subtitle, date, hero, hero-alt, categories, Content } = data;
</script>

<svelte:head>
	<title>My blog - {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<div class="hero">
		<img src="/images/{hero}" alt="{hero-alt}">
	</div>

	<h1>{title}</h1>
	<h2>{subtitle}</h2>
	<h3>Published On: {date}</h3>

	{#if categories.length}
		<aside>
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/blog/category/{category}">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}

	<Content />
</article>
