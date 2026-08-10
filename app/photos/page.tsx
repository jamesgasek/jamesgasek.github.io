import type { Metadata } from 'next';
import { ClientPhotosGrid } from './ClientPhotosGrid';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Photos',
  description: 'A collection of photos I have taken.',
};

export default function PhotosPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">photos</h1>
      <ClientPhotosGrid />
    </section>
  );
}