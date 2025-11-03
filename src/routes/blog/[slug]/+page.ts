// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, subtitle, date, categories, hero } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		subtitle,
		date,
		categories,
		hero
	};
}
