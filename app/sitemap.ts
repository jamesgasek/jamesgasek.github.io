// import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {

  let routes = ['', '/contact', '/uses', '/work'].map((route) => ({
    url: `https://jamesgasek.github.io${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
