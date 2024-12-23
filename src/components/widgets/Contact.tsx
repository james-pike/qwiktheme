import { component$ } from "@builder.io/qwik";
import ContactTab from "./ContactTab";


export default component$(() => {
    return (
        <section class="relative bg-bgAccent py-0 sm:pb-20">
            <div class="max-w-7xl mx-auto px-2 sm:px-6">
                <div class="pb-2 md:py-0">

                    <div class="max-w-3xl mx-auto p-0 rounded-md shadow-xl bg-white dark:bg-gray-900">
                        
                        <div class="bg-bgAccent px-1 rounded-t-lg">
                        <h2 class="text-4xl md:text-4xl font-bold text-center leading-tighter tracking-tighter pt-8 my-0 font-heading">
  <span class="text-primary">Contact Us!</span>
  <br class="block sm:hidden" />
</h2>
<p class="text-xl text-gray-600 text-center dark:text-slate-400 py-2 pb-6">
Get in touch for a free consultation, we're passionate about your website!</p>
                        </div>
                        <div class="mt-0">
                           

                        <ContactTab/>
                        {/* <div class="h-10"></div>
                        <EcomTab/> */}

                        



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
