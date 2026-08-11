import { getPost, getPosts } from '../posts/posts';

export const dynamic = 'force-static';

const SITE = 'https://www.gasek.net';
const TITLE = 'James Gasek';
const SUBTITLE = 'Writing on software, hardware, and applied AI.';

function escape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const posts = await getPosts();
  const updated = posts[0] ? new Date(`${posts[0].date}T00:00:00Z`).toISOString() : undefined;

  const entries = await Promise.all(
    posts.map(async (meta) => {
      const post = await getPost(meta.slug);
      const url = `${SITE}/posts/${meta.slug}`;
      const published = new Date(`${meta.date}T00:00:00Z`).toISOString();
      return [
        '  <entry>',
        `    <title type="html">${escape(meta.title)}</title>`,
        `    <link href="${url}" rel="alternate" type="text/html" title="${escape(meta.title)}" />`,
        `    <id>${url}</id>`,
        `    <published>${published}</published>`,
        `    <updated>${published}</updated>`,
        meta.summary ? `    <summary type="html">${escape(meta.summary)}</summary>` : '',
        `    <content type="html"><![CDATA[${post?.html ?? ''}]]></content>`,
        '  </entry>',
      ]
        .filter(Boolean)
        .join('\n');
    })
  );

  const feed = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<feed xmlns="http://www.w3.org/2005/Atom">',
    `  <title type="html">${TITLE}</title>`,
    `  <subtitle>${SUBTITLE}</subtitle>`,
    `  <link href="${SITE}/feed.xml" rel="self" type="application/atom+xml" />`,
    `  <link href="${SITE}/" rel="alternate" type="text/html" />`,
    `  <id>${SITE}/feed.xml</id>`,
    updated ? `  <updated>${updated}</updated>` : '',
    ...entries,
    '</feed>',
  ]
    .filter(Boolean)
    .join('\n');

  return new Response(feed, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}
