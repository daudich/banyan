<!-- src/routes/blog/+page.svelte -->
<script>
	export let posts;
</script>

{#if posts.length}
	{#each posts as post}
		<div class="postcard">
			<div class="info">
				<h2>
					<a href="blog/{post.path}">
						{post.meta.title}
					</a>
				</h2>
				<p class="date">{post.meta.date}</p>
				<p>{post.meta.subtitle}</p>
				{#each post.meta.categories as category}
					<span class="tag">{category}</span>
				{/each}
			</div>
			<div class="hero">
				{#if post.meta.hero}
					<img src="images/{post.meta.hero}" alt={post.meta.hero_alt} />
				{/if}
			</div>
		</div>
	{/each}
{:else}
	<p>There are no posts here :(</p>
{/if}
