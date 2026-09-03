import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, formatDate } from './posts';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Writing on software, hardware, and applied AI.',
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">posts</h1>

      {posts.length === 0 ? (
        <p className="prose prose-neutral dark:prose-invert">Nothing published yet.</p>
      ) : (
        <ul className="flex flex-col space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.date)}
                {post.category ? ` · ${post.category}` : ''}
              </span>
              <h2 className="text-lg font-medium tracking-tighter">
                <Link
                  href={`/posts/${post.slug}`}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  {post.title}
                </Link>
              </h2>
              {post.summary && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{post.summary}</p>
              )}
            </li>
          ))}
        </ul>
      )}

      <p className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
        subscribe{' '}
        <a href="/feed.xml" className="underline underline-offset-2">
          via RSS
        </a>
        {' · '}Hand written
      </p>
    </section>
  );
}
