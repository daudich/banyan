<!-- src/routes/blog/+page.svelte -->
<script>
	export let posts;
</script>

{#if posts.length}
	<ul>
		{#each posts as post}
			<li>
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