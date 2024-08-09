import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
};

// async function Stars() {
//   let res = await fetch('https://api.github.com/repos/vercel/next.js');
//   let json = await res.json();
//   let count = Math.round(json.stargazers_count / 1000);
//   return `${count}k stars`;
// }

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
<p>
  <Link href="mailto:james@gasek.net">james@gasek.net</Link>
</p>
</div>
</section>
);
}