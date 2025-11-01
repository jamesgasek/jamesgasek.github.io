import { ClientPhotosGrid }  from './ClientPhotosGrid'; // Import the client subcomponent

export const dynamic = 'force-static'; // Now valid in a server module

export default function PhotosPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">photos</h1>
      
      {/* Render the client component with static props */}
      <ClientPhotosGrid />
      
      {/* Info Section (static, so it stays here) */}
      <div className="mt-12 prose prose-neutral dark:prose-invert">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          A collection of moments captured through my lens. Click any photo to view it larger.
        </p>
      </div>
    </section>
  );
}