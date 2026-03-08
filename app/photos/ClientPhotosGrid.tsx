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
  const [selectedPhoto, setSelectedPhoto] = useState<CloudinaryAsset | null>(null);

  useEffect(() => {
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/display.json`)
      .then((r) => r.json())
      .then((data) => setPhotos(data.resources || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedPhoto) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedPhoto(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedPhoto]);

  if (loading) return <div className="text-center py-8">Loading photos...</div>;
  if (photos.length === 0) return <div className="text-center py-8">No photos found.</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-full">
        {photos.map((photo) => (
          <div
            key={photo.public_id}
            className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
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
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <img
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
        </div>
      )}
    </div>
  );
};