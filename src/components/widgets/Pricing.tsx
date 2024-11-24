import { component$ } from "@builder.io/qwik";
import PricingTab from "./PricingTab";


export default component$(() => {
    return (
        <section class="relative bg-gray-100 py-3 sm:pb-20">
            <div class="max-w-7xl mx-auto px-3 sm:px-6">
                <div class="pb-5 md:py-0">

                    <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl bg-white dark:bg-gray-900">
                        <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter pt-2 my-4 font-heading">
                            <span class="text-primary-500">Pricing Plans</span>
                            <br class="block sm:hidden" />
                        </h2>
                        <p class="text-xl text-gray-600 dark:text-slate-400">
                            Get in touch to learn more about how the Etchy Sketchy can help level up your UX game. <br class="hidden md:inline" />
                        </p>

                        <div class="mt-6">
                           

                        <PricingTab/>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});