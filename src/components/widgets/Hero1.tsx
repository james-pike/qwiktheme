

import { component$ } from "@builder.io/qwik";


interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

export default component$((props: Props) => {
  const { id } = props;

  return (
    <section class="relative bg-white scroll-mt-16" {...(id ? { id } : {})}>
    <div class="relative isolate bg-bgLight px-6 py-10 sm:py-18 lg:px-8">
      <svg
        class="absolute inset-0 -z-10 size-full stroke-secondary [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width="200"
            height="200"
            x="50%"
            y="-64"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-64" class="overflow-visible fill-bgAccent">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
        />
      </svg>
  
    
      {/* Content */}
      <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
        <div class="lg:basis-1/2 pb-10 md:pb-16">
          <h1 class="text-6xl md:text-6xl text-tBase font-bold leading-tighter tracking-tighter mb-4 font-heading">
            Build A Better {" "}<br class="hidden lg:block" />
            <span class="text-primary">Website</span>
          </h1>
          <p class="text-xl text-muted text-tBase mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
            Master the lines, embrace the quirks, and turn every twist into a masterpiece—because
            art's all about the journey, not the perfect line.
          </p>
          <div class="sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
            <a
              class="btn bg-primary text-white font-bold w-full p-2"
              href="https://aymansor.github.io/Etch-a-Sketch/"
              target="_blank"
              rel="noopener"
            >
              Start Etching
            </a>
            <button class="btn w-full bg-secondary p-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
});
