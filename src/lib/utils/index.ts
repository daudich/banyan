export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('$lib/data/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(20, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};
