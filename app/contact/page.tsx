import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
<p>
  <Link href="mailto:james@gasek.net">james@gasek.net</Link>
  <Link href="https://www.linkedin.com/in/devjamesgasek">linkedin</Link>
  <Link href="https://www.x.com/jamesgasek">X</Link>
</p>
</div>
</section>
);
}