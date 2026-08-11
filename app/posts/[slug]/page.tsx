import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost, getPosts, getPostNeighbours, formatDate } from '../posts';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      url: `https://www.gasek.net/posts/${post.slug}`,
    },
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const { previous, next } = await getPostNeighbours(post.slug);

  return (
    <section>
      <h1 className="mb-2 text-2xl font-medium tracking-tighter">{post.title}</h1>
      <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        {post.category ? ` · ${post.category}` : ''}
      </p>

      <article
        className="prose prose-neutral dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <nav className="mt-12 flex justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        {previous ? (
          <Link
            href={`/posts/${previous.slug}`}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            ← {previous.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/posts/${next.slug}`}
            className="text-right transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            {next.title} →
          </Link>
        )}
      </nav>

      <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
        <Link href="/posts" className="underline underline-offset-2">
          all posts
        </Link>
      </p>
    </section>
  );
}
