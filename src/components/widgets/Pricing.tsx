import { component$ } from "@builder.io/qwik";
import PricingTab from "./PricingTab";


export default component$(() => {
    return (
        <section class="relative bg-bgAccent py-0 sm:pb-20">
            <div class="max-w-7xl mx-auto px-2 sm:px-6">
                <div class="pb-2 md:py-0">

                    <div class="max-w-3xl mx-auto p-0 rounded-md shadow-xl bg-white dark:bg-gray-900">
                        
                        <div class="bg-bgAccent px-1 rounded-t-lg">
                        <h2 class="text-4xl md:text-4xl font-bold text-center leading-tighter tracking-tighter pt-8 my-0 font-heading">
                            <span class="text-primary-500 pt-0">Pricing</span>
                            <br class="block sm:hidden" />
                        </h2>
                        <p class="text-xl text-gray-600 text-center dark:text-slate-400 pb-6">
                            Choose lump sum and self-host or pay as you go for continous hosting and updates. <br class="hidden md:inline" />
                        </p>
                        </div>
                        <div class="mt-0">
                           

                        <PricingTab/>



                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
