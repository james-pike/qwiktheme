import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import IconStar from "~/components/icons/IconStar";
import { Headline } from "../ui/Headline";
import { CoverImage } from "./coverImage";

export default component$(() => {
  const stepsData = {
    
    title: "How to Master the Art of Etch A Sketching",
    highlight: "Sketchy Tips", // New highlight property added
    items: [
      {
        title: "Step 1: Embrace the Knobs",
        description:
          "Gently take hold of the left and right knobs. Each one controls only one axis, so prepare for a drawing process that’s half art, half workout. Muscle memory may vary.",
        icon: IconStar,
      },
      {
        title: "Step 2: Find Your Inner Line",
        description:
          "Now, twist those knobs with care. One wrong turn could mean hours of delicate linework... or one more abstract masterpiece! Remember: straight lines are a suggestion, not a rule.",
        icon: IconStar,
      },
      {
        title: "Step 3: Shake (and Possibly Cry)",
        description:
          "The piece didn’t turn out as planned? Give it a shake, and poof! The slate’s clean again. Take a deep breath; it’s all part of the creative journey (or so they say).",
        icon: IconStar,
      },
      {
        title: "Ready to Show Off?",
        description:
          "If you’ve managed something recognizable, it’s time to impress friends and family! But handle with care—one bump, and your masterpiece could become a memory.",
        icon: IconStar,
      },
    ],
  
    image: {
      src: CoverImage,
      alt: "Steps image",
    },
  };
  const { title, items, image, highlight } = stepsData;

  return (
    
    <section class="mx-auto bg-gray-100 dark:bg-gray-800 max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      
    <div class="row-gap-10 grid gap-6 md:grid-cols-2">
      
      <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
        
        {title && (
          <Headline
            title={title}
            highlight={highlight} // Pass highlight to the Headline component
          
          />
        )}
        {Array.isArray(items) &&
          items.length &&
          items.map(({ title, description, icon: Icon }, index) => (
            <div key={`item-steps-${index}`} class="flex">
              <div class="mr-4 flex flex-col items-center">
                <div>
                  {index !== items.length - 1 ? (
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                      {typeof Icon !== "undefined" ? (
                        <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                      ) : (
                        <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                      )}
                    </div>
                  ) : (
                    <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                      {typeof Icon !== "undefined" ? (
                        <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                      ) : (
                        <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                      )}
                    </div>
                  )}
                </div>
                {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
              </div>
              <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
              </div>
            </div>
          ))}
      </div>
      <div class="relative">
        {typeof image !== "undefined" && (
          <Image
            layout="constrained"
            src={image.src}
            width={532}
            height={704}
            alt={image.alt}
            class="inset-0 w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
            breakpoints={[320, 480, 640, 1024]}
          />
        )}
      </div>
    </div>
  </section>
  );
});
