<!-- src/routes/blog/+page.svelte -->
<script>
	export let posts;
</script>

{#if posts.length}
	<ul>
		{#each posts as post}
			<li>
				<img src="images/{post.meta.hero}" alt={post.meta.hero_alt}>
				<h2>
					<a href={post.path}>
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
