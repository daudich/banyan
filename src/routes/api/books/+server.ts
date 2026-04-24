// src/routes/api/books/+server.js
import { fetchMarkdownBooks } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allBooks = await fetchMarkdownBooks();

	const sortedBooks = allBooks.sort((a, b) => {
		return new Date(b.meta.to) - new Date(a.meta.to);
	});

	return json(sortedBooks);
};
