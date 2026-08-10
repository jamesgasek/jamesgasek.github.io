'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

interface CloudinaryAsset {
  public_id: string;
  width: number;
  height: number;
  format: string;
  created_at: string;
}

const CLOUD_NAME = 'djfvzjhei';
const THUMB = 'w_400,c_limit,q_auto,f_webp';
const FULL = 'w_2400,c_limit,q_90,f_webp';

function cldUrl(publicId: string, transforms: string) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

function photoLabel(photo: CloudinaryAsset) {
  return `Photo taken ${new Date(photo.created_at).toLocaleDateString()}`;
}

export const ClientPhotosGrid: React.FC = () => {
  const [photos, setPhotos] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    fetch(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/display.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`Cloudinary responded ${r.status}`);
        return r.json();
      })
      .then((data) => setPhotos(data.resources || []))
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  // wraps around at both ends
  const step = useCallback(
    (delta: number) =>
      setSelectedIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  );

  const open = (index: number) => {
    lastFocusedRef.current = document.activeElement as HTMLElement;
    setSelectedIndex(index);
  };

  const close = useCallback(() => {
    setSelectedIndex(null);
    lastFocusedRef.current?.focus();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selectedIndex, step, close]);

  // move focus into the lightbox so the arrow buttons are reachable by keyboard
  useEffect(() => {
    if (selectedIndex !== null) dialogRef.current?.focus();
  }, [selectedIndex]);

  // warm the neighbours so arrow navigation does not wait on a fresh download
  useEffect(() => {
    if (selectedIndex === null || photos.length < 2) return;
    for (const delta of [1, -1]) {
      const neighbour = photos[(selectedIndex + delta + photos.length) % photos.length];
      new Image().src = cldUrl(neighbour.public_id, FULL);
    }
  }, [selectedIndex, photos]);

  if (loading) return <div className="text-center py-8">Loading photos...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-neutral-600 dark:text-neutral-400">
        Couldn't load photos right now. Please try again later.
      </div>
    );
  if (photos.length === 0) return <div className="text-center py-8">No photos found.</div>;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 h-full">
        {photos.map((photo, index) => (
          <button
            key={photo.public_id}
            type="button"
            aria-label={`Open ${photoLabel(photo).toLowerCase()}`}
            className="shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => open(index)}
          >
            <div className="relative overflow-hidden">
              <img
                src={cldUrl(photo.public_id, THUMB)}
                alt=""
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={photoLabel(selectedPhoto)}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 outline-none"
          onClick={close}
        >
          {photos.length > 1 && (
            <button
              type="button"
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 z-10 flex h-12 w-12 items-center justify-center text-3xl text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              ‹
            </button>
          )}

          <div
            className="relative max-w-4xl max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={selectedPhoto.public_id}
              src={cldUrl(selectedPhoto.public_id, FULL)}
              alt=""
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
              type="button"
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 z-10 flex h-12 w-12 items-center justify-center text-3xl text-white/70 hover:text-white transition-colors"
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
