import { fetchMarkdownBooks } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBooks = await fetchMarkdownBooks();

  const sortedBooks = allBooks.sort((a, b) => {
    return new Date(b.meta.to as string).getTime()
      - new Date(a.meta.from as string).getTime();
	});

	return json(sortedBooks);
};
