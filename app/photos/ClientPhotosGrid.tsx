'use client';
import { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary'; // Import the magic

interface CloudinaryAsset {
  public_id: string;
  width: number;
  height: number;
  format: string;
}

export const ClientPhotosGrid: React.FC = () => {
  const [photos, setPhotos] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<CloudinaryAsset | null>(null); 
  const cloudName = 'djfvzjhei'; 
  const tag = 'display';

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://res.cloudinary.com/${cloudName}/image/list/${tag}.json`
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        const data = await response.json();
        console.log('Fetched assets:', data.resources); // Debug
        setPhotos(data.resources || []);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [cloudName, tag]);

  // Close modal on ESC or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPhoto) {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedPhoto]);

  if (loading) return <div className="text-center py-8">Loading photos...</div>;
  if (photos.length === 0) return <div className="text-center py-8">No photos found.</div>;

  return (
    <div>
      {/* Grid: Full container height/width with preserved aspect */}
      <div className="grid grid-cols-3 gap-4 h-full"> {/* h-full assumes parent has height; adjust as needed */}
        {photos.map((photo) => (
          <div
            key={photo.public_id}
            className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            style={{ height: '100%' }} // Use full container height
            onClick={() => setSelectedPhoto(photo)} // Open modal
          >
            <CldImage
              src={photo.public_id}
              width={400} // Lightweight thumb for quick load (scales down originals)
              height={photo.height * (400 / photo.width)} // Preserve aspect ratio
              crop="limit" // Scales to fit without cropping/distortion
              quality="auto" // Auto-optimize for speed (compresses to ~70-80% quality)
              alt={photo.public_id}
              className="w-full h-full object-contain" // Fill container, preserve aspect
              priority={false} // Lazy-load for perf
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" // Semi-transparent bg
          onClick={() => setSelectedPhoto(null)} // Close on outside click
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <CldImage
              src={selectedPhoto.public_id}
              width={1200} // Larger for full view
              height={selectedPhoto.height * (1200 / selectedPhoto.width)} // Preserve aspect
              crop="limit"
              quality="auto"
              alt={selectedPhoto.public_id}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain" // Responsive full-screen
            />
          </div>
        </div>
      )}
    </div>
  );
};