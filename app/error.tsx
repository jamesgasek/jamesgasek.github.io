'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Oh no, something went wrong.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded text-sm"
      >
        Try again
      </button>
    </div>
  );
}
