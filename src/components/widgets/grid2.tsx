import { component$, useStore, useTask$ } from '@builder.io/qwik';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default component$(() => {
  const gridItemsStore = useStore({
    gridItems: new Array(30).fill(null).map(() => ({
      animationDelay: `${getRandomInt(0, 5)}s`,
      animationDuration: `${getRandomInt(3, 6)}s`,
    })),
  });

  return (
    <div class="relative min-h-screen bg-bgAccent overflow-hidden">
      <div class="grid-background absolute inset-0 p-2 grid grid-cols-6 gap-1 transform -skew-y-0 scale-100">
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

      <div class="relative max-w-4xl mx-auto px-6 lg:px-8">
        <div class="mt-12 rounded-lg border border-secondary bg-bgAccent p-8 lg:p-12">
          <form action="#" method="POST" class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm font-semibold text-gray-900">
                First name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm font-semibold text-gray-900">
                Last name
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="budget" class="block text-sm font-semibold text-gray-900">Budget</label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="budget"
                  id="budget"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="website" class="block text-sm font-semibold text-gray-900">Website</label>
              <div class="mt-2.5">
                <input
                  type="url"
                  name="website"
                  id="website"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="message" class="block text-sm font-semibold text-gray-900">Message</label>
              <div class="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                ></textarea>
              </div>
            </div>

            <div class="mt-10 sm:col-span-2">
              <button
                type="submit"
                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let’s talk
              </button>
            </div>
            <p class="mt-4 text-sm text-gray-500 sm:col-span-2">
              By submitting this form, I agree to the{' '}
              <a href="#" class="font-semibold text-indigo-600">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
});
