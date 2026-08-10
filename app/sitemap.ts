export default async function sitemap() {
  let routes = [
    '',
    '/contact',
    '/work',
    '/now',
    '/photos',
    '/newtonnotes',
    '/gasekjames.pdf',
  ].map((route) => ({
    url: `https://www.gasek.net${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
