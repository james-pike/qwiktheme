import { component$, useTask$ } from "@builder.io/qwik";

// Dynamically import the 'countup.js' module and access CountUp from the default export.
export default component$(() => {
  useTask$(() => {
    import("countup.js").then((module) => {
      // Access the default export (which is the CountUp constructor)
      const { CountUp } = module;
      new CountUp("etcher-stat", 132000).start();
      new CountUp("stars-stat", 24800).start();
      new CountUp("forks-stat", 10300).start();
      new CountUp("designs-stat", 0).start(); // N/A or can be replaced with a value
    });
  });

  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div id="etcher-stat" class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            132K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Etcher Sketchers
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div id="stars-stat" class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            24.8K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Stars
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div id="forks-stat" class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500">
            10.3K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Forks
          </p>
        </div>
        <div class="text-center">
          <div id="designs-stat" class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            N/A
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Designs worth keeping
          </p>
        </div>
      </div>
    </div>
  );
});
