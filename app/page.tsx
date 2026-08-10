import Link from 'next/link';

function Badge(props: React.ComponentPropsWithoutRef<'a'>) {
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

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        hey, I'm James 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {` I'm a software developer specializing in applied AI and embedded systems. I
         currently `}
        <Link href="/work">work</Link>
        {` in Boston at Amazon Robotics. Some projects of mine include `}
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
 <Link href="/contact">contact me.</Link>
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
            href="/contact"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">contact me</p>
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
