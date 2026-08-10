'use client';
import { useState, useEffect } from 'react';

interface CloudinaryAsset {
  public_id: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
}

const CLOUD_NAME = 'djfvzjhei';

function cldUrl(publicId: string, transforms: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

export const ClientPhotosGrid: React.FC = () => {
  const [photos, setPhotos] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/display.json`)
      .then((r) => r.json())
      .then((data) => setPhotos(data.resources || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  // wraps around at both ends
  const step = (delta: number) =>
    setSelectedIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedIndex, photos.length]);

  if (loading) return <div className="text-center py-8">Loading photos...</div>;
  if (photos.length === 0) return <div className="text-center py-8">No photos found.</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-full">
        {photos.map((photo, index) => (
          <div
            key={photo.public_id}
            className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={cldUrl(photo.public_id, 'w_400,c_limit,q_auto,f_webp')}
                alt={photo.public_id}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedIndex(null)}
        >
          {photos.length > 1 && (
            <button
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 z-10 p-3 text-3xl text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              ‹
            </button>
          )}

          <div className="relative max-w-4xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <img
              key={selectedPhoto.public_id}
              src={cldUrl(selectedPhoto.public_id, 'w_2400,c_limit,q_90,f_webp')}
              alt={selectedPhoto.public_id}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
              onLoad={(e) => {
                const span = (e.target as HTMLElement).nextElementSibling as HTMLElement;
                if (span) span.style.opacity = '1';
              }}
            />
            <span className="block text-xs text-neutral-500 mt-1 opacity-0 transition-opacity">
              {new Date(selectedPhoto.created_at).toLocaleDateString()}
            </span>
          </div>

          {photos.length > 1 && (
            <button
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 z-10 p-3 text-3xl text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
};