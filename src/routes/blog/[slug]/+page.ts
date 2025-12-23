// src/routes/blog/[slug]/+page.js
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, subtitle, date, update, categories, hero, hero_alt } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		subtitle,
		date,
		update,
		categories,
		hero,
		hero_alt
	};
}
