import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
import { PreloadResources } from 'app/preload';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What I\'m focused on right now.',
};

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
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
          Lately, i've been experimenting with AI- driven products and UX's. To me, it's obvious we're at the cusp of a huge paradigm shift. 
        </p>
      </div>


      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </section>
  );
}
