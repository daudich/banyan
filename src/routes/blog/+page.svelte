<!-- src/routes/blog/+page.svelte -->
<script>
	import Posts from '$lib/components/Posts.svelte';
	export let data;
</script>

<h1>Blog</h1>

<div class="posts">
	<Posts posts={data.posts} />
</div>
