<!-- src/routes/blog/+page.svelte -->
<script>
	export let posts;
</script>

{#if posts.length}
	<ul>
		{#each posts as post}
			<li>
				{#if post.meta.hero}
					<img src="images/{post.meta.hero}" alt={post.meta.hero_alt} />
				{/if}
				<h2>
					<a href="blog/{post.path}">
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
{:else}
	<p>There are no posts here :(</p>
{/if}
