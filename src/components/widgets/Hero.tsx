import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { CoverImage } from "./coverImage";

export default component$(() => {
  return (
        <div>
<section class="relative md:-mt-[76px] not-prose flex items-center justify-center h-[100vh]">
  
  <div class="absolute inset-0 -mt-28 overflow-hidden -z-10">
   <img width={600} height={600} src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20483%20862%22%20preserveAspectRatio%3D%22xMidYMid%22%20width%3D%22483%22%20height%3D%22862%22%20style%3D%22shape-rendering%3A%20auto%3B%20display%3A%20block%3B%20background%3A%20rgb(255%2C%20255%2C%20255)%3B%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%3Cg%20style%3D%22transform%3Atranslate(241.5px%2C431.0px)%20scale(1%2C-1)%20translate(-241.5px%2C-431.0px)%22%3E%3Cdefs%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-bk-jg6mq6wfbyj%22%3E%3Cstop%20offset%3D%220%22%20stop-opacity%3D%220%22%20stop-color%3D%22%23fd5c63%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.8500000000000001%22%20stop-opacity%3D%221%22%20stop-color%3D%22%23fd5c63%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3ClinearGradient%20y2%3D%221%22%20y1%3D%220%22%20x2%3D%220%22%20x1%3D%220%22%20id%3D%22lg-oersv4ab58c%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fd5c63%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.37%22%20stop-color%3D%22%23fd5c63%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fd5c63%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23lg-bk-jg6mq6wfbyj)%22%20height%3D%22862%22%20width%3D%22483%22%20y%3D%220%22%20x%3D%220%22%3E%3C%2Frect%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20586.1600000000001C241.5%20586.1600000000001%20241.5%20666.1536000000001%20483%20666.1536000000001C724.5%20666.1536000000001%20724.5%20586.1600000000001%20966%20586.1600000000001C1207.5%20586.1600000000001%201207.5%20666.1536000000001%201449%20666.1536000000001C1690.5%20666.1536000000001%201690.5%20586.1600000000001%201932%20586.1600000000001L1932%20862%20L0%20862%20Z%22%3E%3CanimateTransform%20values%3D%22-966%200%3B0%200%22%20begin%3D%220s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%220s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20586.1600000000001C241.5%20586.1600000000001%20241.5%20666.1536000000001%20483%20666.1536000000001C724.5%20666.1536000000001%20724.5%20586.1600000000001%20966%20586.1600000000001C1207.5%20586.1600000000001%201207.5%20666.1536000000001%201449%20666.1536000000001C1690.5%20666.1536000000001%201690.5%20586.1600000000001%201932%20586.1600000000001L1932%20862%20L0%20862%20Z%22%3E%3CanimateTransform%20values%3D%22-966%200%3B0%200%22%20begin%3D%22-0.4242424242424243s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%22-3.0303030303030307s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20opacity%3D%220.4%22%20fill%3D%22url(%23lg-oersv4ab58c)%22%20d%3D%22M0%20586.1600000000001C241.5%20586.1600000000001%20241.5%20666.1536000000001%20483%20666.1536000000001C724.5%20666.1536000000001%20724.5%20586.1600000000001%20966%20586.1600000000001C1207.5%20586.1600000000001%201207.5%20666.1536000000001%201449%20666.1536000000001C1690.5%20666.1536000000001%201690.5%20586.1600000000001%201932%20586.1600000000001L1932%20862%20L0%20862%20Z%22%3E%3CanimateTransform%20values%3D%22-966%200%3B0%200%22%20begin%3D%22-0.8484848484848486s%22%20keyTimes%3D%220%3B1%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fpath%3E%3CanimateTransform%20values%3D%220%200%3B0%2010%3B%200%22%20begin%3D%22-6.060606060606061s%22%20keyTimes%3D%220%3B0.5%3B1%22%20keySplines%3D%220.3%200%200.7%201%3B0.3%200%200.7%201%22%20calcMode%3D%22spline%22%20repeatCount%3D%22indefinite%22%20dur%3D%229.090909090909092s%22%20type%3D%22translate%22%20attributeName%3D%22transform%22%3E%3C%2FanimateTransform%3E%3C%2Fg%3E%3Cg%3E%3C%2Fg%3E%3C%2Fg%3E%3C!--%20%5Bldio%5D%20generated%20by%20https%3A%2F%2Floading.io%20--%3E%3C%2Fsvg%3E"/>
  </div>

  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
    <div class="lg:basis-1/2 pb-10 md:pb-16">
      <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
        Draw Outside the Lines with the<br class="hidden lg:block" />{" "}
         <span class="text-primary-500">Etchy Sketchy</span> 
      </h1>
      <p class="text-xl text-muted mb-6 dark:text-slate-300 max-w-3xl mx-auto lg:max-w-none">
        Scribble your way through creativity. Master the lines, embrace the quirks, and turn every twist into a masterpiece—because art’s all about the journey, not the perfect line.
      </p>
      <div class="max-w-xs sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
        <a class="btn btn-primary w-full" href="https://github.com/onwidget/qwind" target="_blank" rel="noopener">Start Etching</a>
        <button class="btn w-full bg-gray-50 dark:bg-transparent">Learn More</button>
      </div>
    </div>
    <div class="lg:basis-1/2">
       <Image
        src={CoverImage}
        alt="Background cover image"
        width={958} // adjust width to your layout needs
        height={792} // adjust height for your layout
        class="object-cover w-full h-full" 
        priority="true"
      />
    </div>
  </div>
</section>
    </div>
  );
});


  