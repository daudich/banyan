export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('$lib/data/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() as { metadata: Record<string, unknown> };
      const postPath = path.slice(20, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};

export const fetchMarkdownBooks = async () => {
  const allBookFiles = import.meta.glob('$lib/data/books/*.md');
  const iterableBookFiles = Object.entries(allBookFiles);

  const allBooks = await Promise.all(
    iterableBookFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver() as { metadata: Record<string, unknown> };
      const bookPath = path.slice(20, -3);

      return {
        meta: metadata,
        path: bookPath
      };
    })
  );

  return allBooks;
};
