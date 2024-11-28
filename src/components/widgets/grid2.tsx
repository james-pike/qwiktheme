import { component$, useStore, useTask$ } from '@builder.io/qwik';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default component$(() => {
  // Store for grid items with random animation properties
  const gridItemsStore = useStore({
    gridItems: new Array(30).fill(null).map(() => ({
      animationDelay: `${getRandomInt(0, 5)}s`,
      animationDuration: `${getRandomInt(3, 6)}s`,
    })),
  });

  // Task to apply the animation delay/duration after hydration
  useTask$(() => {
    // Logic to execute after component is hydrated, if needed
    console.log('Grid items loaded and animations are ready.');
  });

  return (
    <div class="relative min-h-screen max-w-7xl mx-auto flex -mt-8 items-center justify-center bg-bgAccent overflow-hidden">
      {/* Grid background */}
      <div class="grid-background absolute inset-0 p-2 grid grid-cols-6 gap-1 transform -skew-y-12 scale-100">
        {gridItemsStore.gridItems.map((item, index) => (
          <div
            key={index}
            class="bg-secondary rounded animate-pulse"
            style={{
              animationDelay: item.animationDelay,
              animationDuration: item.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Content */}
     {/* Content */}
     <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
          <div class="lg:basis-1/2 pb-10 md:pb-16">
           
        <div
          class="mt-12 rounded-lg border border-secondary bg-bgAccent p-8 lg:p-12"
         
        >
          <div class="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <form action="#" method="POST" class="lg:flex-auto">
              <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">
                    First name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">
                    Last name
                  </label>
                  <div class="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label for="budget" class="block text-sm/6 font-semibold text-gray-900">Budget</label>
                  <div class="mt-2.5">
                    <input
                      id="budget"
                      name="budget"
                      type="text"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div>
                  <label for="website" class="block text-sm/6 font-semibold text-gray-900">Website</label>
                  <div class="mt-2.5">
                    <input
                      type="url"
                      name="website"
                      id="website"
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
                  <div class="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <button
                  type="submit"
                  class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let’s talk
                </button>
              </div>
              <p class="mt-4 text-sm/6 text-gray-500">
                By submitting this form, I agree to the
                <a href="#" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
              </p>
            </form>
          
          </div>
        </div>
      </div>
        </div>
    </div>
  );
});
