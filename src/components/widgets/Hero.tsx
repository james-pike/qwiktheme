import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";


export default component$(() => {
  return (
        <div>
<section class="relative md:-mt-[76px] not-prose bg-primary flex items-center justify-center h-[75vh]">
  
  <div class="absolute inset-0 -mt-28 overflow-hidden -z-10">
   <img width={600} height={600} src={""} alt="Background cover image" class="object-cover w-full h-full" />
  </div>
  <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
    <div class="lg:basis-1/2 pb-10 md:pb-16">
      <h1 class="text-6xl md:text-6xl text-white sm:text-gray-900 dark:text-gray-900 font-bold leading-tighter tracking-tighter mb-4 font-heading">
      Build A Better<br class="hidden lg:block" />{" "}
         <span class="text-primary-500">Website</span> 
      </h1>
      <p class="text-xl text-muted mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
        Master the lines, embrace the quirks, and turn every twist into a masterpiece— becauuse art's all about the journey, not the perfect line.
      </p>
      <div class=" sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
        <a class="btn bg-primary-500 text-white font-bold w-full" href="https://aymansor.github.io/Etch-a-Sketch/" target="_blank" rel="noopener">Start Etching</a>
        <button class="btn w-full bg-gray-50">Learn More</button>
      </div>
    </div>
   
    
  </div>
</section>
 <div class="lg:basis-1/2">
 <Image
  src={""}
  alt="Background cover image"
  width={500} // adjust width to your layout needs
  height={500} // adjust height for your layout
  class="object-cover w-full h-full" 
  priority="true"
/>
    </div>
    </div>
  );
});


  