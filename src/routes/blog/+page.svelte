<!-- src/routes/blog/+page.svelte -->
<script>
	import Posts from '$lib/components/Posts.svelte';
	export let data;
</script>

<h1>Blog</h1>

<Posts posts={data.posts}/>