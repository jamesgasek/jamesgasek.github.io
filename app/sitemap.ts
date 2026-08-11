import { getPosts } from './posts/posts';

export default async function sitemap() {
  const lastModified = new Date().toISOString().split('T')[0];

  const routes = ['', '/contact', '/work', '/now', '/posts', '/photos', '/newtonnotes'].map(
    (route) => ({
      url: `https://www.gasek.net${route}`,
      lastModified,
    })
  );

  const posts = (await getPosts()).map((post) => ({
    url: `https://www.gasek.net/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [...routes, ...posts];
}
