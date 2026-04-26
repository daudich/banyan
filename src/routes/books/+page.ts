export const load = async ({ fetch }) => {
	const response = await fetch(`/api/books`);
	const books = await response.json();

	const booksWithContent = await Promise.all(
		books.map(async (book: { path: string }) => {
			const module = await import(`$lib/data/books/${book.path}.md`);
			return {
				...book,
				Content: module.default
			};
		})
	);

	return {
		books: booksWithContent
	};
};
