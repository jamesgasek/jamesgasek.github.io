---
title: 'Starting a posts page'
date: '2026-08-11'
category: meta
summary: 'What this is and how posts get written.'
---

I added this page to have somewhere to write up things I work on: embedded
projects, applied AI, and whatever else turns out to be worth a few paragraphs.

Posts are Markdown files in `content/posts/`, parsed at build time. A post needs
a title and a date; a category and summary are optional:

```yaml
---
title: 'Starting a posts page'
date: '2026-08-11'
category: meta
summary: 'What this is and how posts get written.'
---
```

Fenced code blocks get syntax highlighting, so this renders with tokens coloured:

```ts
export async function getPosts(): Promise<PostMeta[]> {
  const files = await readPostFiles();
  return (await Promise.all(files.map(read))).sort(byDateDesc);
}
```

The file name becomes the URL, so this one lives at `/posts/hello`. There is an
[RSS feed](/feed.xml) too.
