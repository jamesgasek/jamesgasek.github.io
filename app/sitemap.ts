// import { getBlogPosts } from 'app/db/blog';

export default async function sitemap() {

  let routes = ['', '/contact', '/uses', '/work', '/now', '/resume/gasekjames.pdf'].map((route) => ({
    url: `https://www.gasek.net${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
