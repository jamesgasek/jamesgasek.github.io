import { ClientPhotosGrid }  from './ClientPhotosGrid'; // Import the client subcomponent

export const dynamic = 'force-static'; // Now valid in a server module

export default function PhotosPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">photos</h1>
      
      {/* Render the client component with static props */}
      <ClientPhotosGrid />
    </section>
  );
}