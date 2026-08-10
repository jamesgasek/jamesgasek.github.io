import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I\'m focused on right now.',
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        now
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`This is a `}
        <Link href="https://nownownow.com/about" target="_blank">now page</Link>
        {`. It's a snapshot of what I'm currently focused on in my life and work.`}
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I live in South Boston, and have been prioritizing health by running and lifting- The Boston chapter of the Founders Run Club is awesome.
        </p>

        <p>
          I recently built an e-bike which has been great for exploring the city, hike often, and am preparing for ski season when I'll be visiting Zermatt. I'm starting to pick up photography. 
        </p>

        <p>
          Lately, I've been experimenting with AI- driven products and UX's. To me, it's obvious we're at the cusp of a huge paradigm shift. 
        </p>
      </div>


      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Last updated: November 2025
        </p>
      </div>
    </section>
  );
}
