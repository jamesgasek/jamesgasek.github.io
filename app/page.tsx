import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';
// import smashing from 'public/images/home/smashing.jpg';
// import summit from 'public/images/home/summit.jpg';
// import reactathon from 'public/images/home/reactathon.jpg';
// import ship from 'public/images/home/ship.jpg';
// import filming from 'public/images/home/filming.jpg';
// import meetups from 'public/images/home/meetups.jpg';
// import ViewCounter from 'app/blog/view-counter';
import { PreloadResources } from 'app/preload';
// import {
//   // getLeeYouTubeSubs,
//   // getVercelYouTubeSubs,
//   getViewsCount,
// } from 'app/db/queries';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full border border-neutral-200 dark:border-neutral-700"
              priority
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border border-neutral-200 bg-white p-1 dark:border-neutral-700">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/nextjs-github-pages/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {name}
            </p>
            <Suspense fallback={<p className="h-6" />}>
              {/* <Subs name={name} /> */}
            </Suspense>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

// async function Subs({ name }: { name: string }) {
//   noStore();
//   let subscribers;
//   if (name === '@leerob') {
//     subscribers = 100
//   } else {
//     subscribers = 100
//   }

//   return (
//     <p className="text-neutral-600 dark:text-neutral-400">
//       {subscribers} subscribers
//     </p>
//   );
// }

// function BlogLink({ slug, name }) {
//   return (
//     <div className="group">
//       <a
//         href={`/blog/${slug}`}
//         className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
//       >
//         <div className="flex flex-col">
//           <p className="font-medium text-neutral-900 dark:text-neutral-100">
//             {name}
//           </p>
//           <Suspense fallback={<p className="h-6" />}>
//             <Views slug={slug} />
//           </Suspense>
//         </div>
//         <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
//           <ArrowIcon />
//         </div>
//       </a>
//     </div>
//   );
// }

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   return <ViewCounter allViews={views} slug={slug} />;
// }

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm James 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {` I'm a software developer, and I'm passionate about building solutions that make a difference. I
         currently `}
        <Link href="/work">work</Link>
        {` in Boston building software and applied AI at Amazon Robotics. Some projects of mine include `}
        <span className="not-prose">
          <Badge href="https://www.investloupt.com">

          <img
            alt="Next.js logomark"
            src="/louptFilled.svg"
            className="!mr-1"
            width="14"
            height="14"
          />
          Loupt
          </Badge>
        </span>
        {`, a Crowdfunding platform, as well as my Workout app, `}

        <span className="not-prose">
          <Badge href="/newtonnotes">

          <img
            alt="Newton Notes logomark"
            src="/newtonnotes.png"
            className="!mr-1"
            width="14"
            height="14"
          />
         Newton Notes 
          </Badge>
        </span>
        {`.`}

      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past decade, I've worked at companies big and small, and experimented with as many hardware and software technologies as I could get my hands on.
          I recently completed a dual-degree program from Lehigh University in December 2023, in Computer Science and Business, with a minor in Data Science. 
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm passionate about tackling hard problems, building delightful user experiences, and leading teams to success. I'm always looking for new opportunities to learn and grow, so if you're working on something cool,{' '} 
 <Link href="/contact">contact me!</Link>
        </p>
      </div>
     
      <div className="prose prose-neutral dark:prose-invert">
{/*         <p>
          I've worked with and advised companies on{' '}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
          <Link href="/blog/devrel">developer relations</Link>, building
          open-source communities, product-led growth, and more.
        </p> */}
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/jamesgasek"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li>


      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300"></ul>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://gasek.net/resume"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">resume</p>
          </a>
        </li>
      
      </ul>
    </section>
  );
}
