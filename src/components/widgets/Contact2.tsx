

import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Headline } from "~/components/ui/Headline";

import PricingTab from "./PricingTab";

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
  const { id, title = "", subtitle = "", highlight = "", classes = {}, isDark = false } = props;

  return (
    <section class="relative bg-bgLight scroll-mt-16" {...(id ? { id } : {})}>
      
      <div class="absolute inset-0 pointer-events-none -z-[1]" aria-hidden="true">
        <slot name="bg">
          <div class={twMerge("absolute inset-0", isDark ? "bg-dark dark:bg-transparent" : "")}></div>
        </slot>
      </div>
      <div
        class={twMerge(
          "relative mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16 lg:py-20 text-default",
          classes?.container,
          isDark ? "dark" : ""
        )}
      >
        
        <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
        <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <svg class="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-64" patternUnits="userSpaceOnUse">
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y="-64" class="overflow-visible fill-gray-50">
      <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z" stroke-width="0" />
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
  </svg>
  <div class="mx-auto max-w-xl lg:max-w-4xl">
    <h2 class="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Let’s talk about your project</h2>
    <p class="mt-2 text-lg/8 text-gray-600">We help companies and individuals build out their brand guidelines.</p>
    <div class="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
      <form action="#" method="POST" class="lg:flex-auto">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
            <div class="mt-2.5">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
            <div class="mt-2.5">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <label for="budget" class="block text-sm/6 font-semibold text-gray-900">Budget</label>
            <div class="mt-2.5">
              <input id="budget" name="budget" type="text" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
          <div>
            <label for="website" class="block text-sm/6 font-semibold text-gray-900">Website</label>
            <div class="mt-2.5">
              <input type="url" name="website" id="website" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"/>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea id="message" name="message" rows={4} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let’s talk</button>
        </div>
        <p class="mt-4 text-sm/6 text-gray-500">By submitting this form, I agree to the <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.</p>
      </form>
      <div class="lg:mt-6 lg:w-80 lg:flex-none">
        <img class="h-12 w-auto" src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg" alt=""/>
        <figure class="mt-10">
          <blockquote class="text-lg/8 font-semibold text-gray-900">
            <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          </blockquote>
          <figcaption class="mt-10 flex gap-x-6">
            <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80" alt="" class="size-12 flex-none rounded-full bg-gray-50"/>
            <div>
              <div class="text-base font-semibold text-gray-900">Brenna Goyette</div>
              <div class="text-sm/6 text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
});