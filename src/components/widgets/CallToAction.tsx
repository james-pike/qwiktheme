import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-primary-500">Not convinced?</span> 
              <br class="block sm:hidden" />
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
              Get in touch to learn more about how the Etchy Sketchy can help up your UX game. <br class="hidden md:inline" />
              Don't waste more time!
            </p>

            <div class="mt-6">
            <form class="space-y-6">
              <div>
                <label class="block text-gray-700 dark:text-slate-300 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label class="block text-gray-700 dark:text-slate-300 font-medium mb-2" for="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label class="block text-gray-700 dark:text-slate-300 font-medium mb-2" for="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  class="w-full px-4 py-2 border rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-200"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
            </div>
          </div>

          {/* Contact Form Section */}
         
       

    
          </div>
        </div>
    
    </section>
  );
});
