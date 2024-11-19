import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Newton Notes', // This will override the template
  },
  description: 'The most intuitive workout companion and tracker available.',
};

export default function HomePage() {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full max-w-2xl px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <img 
            src="/newtonnotes.png"
            alt="Newton Notes App Icon"
            width={120}
            height={120}
            className="rounded-2xl mb-6"
          />
          <h1 className="font-medium text-3xl mb-4 tracking-tighter">Newton Notes</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            The most intuitive workout companion and tracker available.
          </p>
          <Link 
            href="itms-apps://"
            className="bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Download on the App Store
          </Link>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="font-medium text-xl mb-4 tracking-tighter">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Stupid Simple</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  The simplest workout app available. With its intuitive UI, lightweight size, and focused features, it's the obvious choice for a workout tracker that just gets out of the way.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Privacy by Default</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We don't use your data, because we don't know who you are. Login-free by design, with export/import options and Apple Health integrations coming soon.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Analyze Anything</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Flexible analytics allow you to log any metric, at any time, using any unit you'd like. Keep tabs on your weight, blood levels, PRs, and more.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Targeted Functionality</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  No advertisements, subscription fees, or tacky AI features. Your purchase helps steer the direction of the app and suggest new features.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-medium text-xl mb-4 tracking-tighter">Coming Soon</h2>
            <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>Automatic repetition logs</li>
              <li>Apple Health integration</li>
              <li>Apple Watch integration</li>
              <li>Per-Exercise and Per-Workout notes</li>
              <li>Workout duration logging</li>
              <li>Notification-based timer</li>
            </ul>
          </div>

          <div className="text-center pb-8">
            <p className="text-neutral-600 dark:text-neutral-400">
              Forget using your Notes app to track workouts, and start using Newton Notes today.
            </p>
            <div className="mt-8">
              <Link href="newtonnotes/privacypolicy" className="text-neutral-600 dark:text-neutral-400 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}