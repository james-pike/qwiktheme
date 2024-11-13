import { component$, useStore, useTask$ } from "@builder.io/qwik";

const animateNumber = (start: number, end: number, duration: number, callback: (value: number) => void) => {
  const startTime = Date.now();

  const step = () => {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(start + (end - start) * progress);

    callback(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

export default component$(() => {
  const stats = useStore({
    etcherStat: 0,
    starsStat: 0,
    forksStat: 0,
    designsStat: 0,
  });

  useTask$(() => {
    // Animate the stats to their final values
    animateNumber(0, 132000, 2000, (value) => (stats.etcherStat = value));
    animateNumber(0, 24800, 2000, (value) => (stats.starsStat = value));
    animateNumber(0, 10300, 2000, (value) => (stats.forksStat = value));
    animateNumber(0, 0, 2000, (value) => (stats.designsStat = value)); // N/A or can be replaced with a value
  });

  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            {stats.etcherStat.toLocaleString()}
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Etcher Sketchers
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            {stats.starsStat.toLocaleString()}
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Stars
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500">
            {stats.forksStat.toLocaleString()}
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Forks
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-primary-500 font-heading">
            {stats.designsStat.toLocaleString()}
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Designs worth keeping
          </p>
        </div>
      </div>
    </div>
  );
});
