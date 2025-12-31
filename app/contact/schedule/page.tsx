import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Schedule a Meeting',
  description: 'Schedule a meeting with me.',
};

export default function SchedulePage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">schedule a meeting</h1>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/james-gasek/30min?background_color=111010&text_color=d4d4d4"
        style={{ minWidth: '320px', height: '700px' }}
      />
      {/* <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      /> */}
    </section>
  );
}
