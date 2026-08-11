import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category?: string;
  summary?: string;
}

export interface Post extends PostMeta {
  html: string;
}

// Aug 2, 2026
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

async function readPostFiles() {
  try {
    const names = await fs.readdir(POSTS_DIR);
    return names.filter((name) => name.endsWith('.md'));
  } catch {
    return [];
  }
}

function parse(slug: string, raw: string) {
  const { data, content } = matter(raw);
  if (!data.title) throw new Error(`Post "${slug}" is missing a title`);
  if (!data.date) throw new Error(`Post "${slug}" is missing a date`);
  const date =
    data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  return {
    meta: {
      slug,
      title: String(data.title),
      date,
      category: data.category ? String(data.category) : undefined,
      summary: data.summary ? String(data.summary) : undefined,
    },
    content,
  };
}

async function render(markdown: string) {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
}

// newest first, matching the reference site's ordering
function byDateDesc(a: PostMeta, b: PostMeta) {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug);
}

export async function getPosts(): Promise<PostMeta[]> {
  const files = await readPostFiles();
  const posts = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(POSTS_DIR, file), 'utf8');
      return parse(file.replace(/\.md$/, ''), raw).meta;
    })
  );
  return posts.sort(byDateDesc);
}

export async function getPost(slug: string): Promise<Post | null> {
  let raw: string;
  try {
    raw = await fs.readFile(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
  } catch {
    return null;
  }
  const { meta, content } = parse(slug, raw);
  return { ...meta, html: await render(content) };
}

// previous is older, next is newer
export async function getPostNeighbours(slug: string) {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}
