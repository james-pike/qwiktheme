import { component$ } from '@builder.io/qwik'
import { Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel class="!h-96" pauseOnHover>
    <Carousel.Slide>
      <section
        class="isolate overflow-hidden bg-white px-6 lg:px-8"
        style={{
          background: `radial-gradient(50% 100% at top, var(--color-bg-accent, #f5f5f5), var(--color-bg-primary, white))`,
        }}
      >
        <div class="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl">
          <div
            class="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 opacity-20 lg:left-36"
            style={{
              background: `radial-gradient(50% 100% at top, var(--color-secondary, #dcdcdc), var(--color-bg-accent, white))`,
            }}
          ></div>
          <div
            class="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center"
            style={{
              backgroundColor: `var(--color-bg-primary, white)`,
            }}
          ></div>
          <figure class="grid grid-cols-1 items-center gap-x-6 gap-y-8 lg:gap-x-10">
            <blockquote class="text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                Commodo amet fugiat excepteur sunt qui ea elit cupidatat ullamco consectetur ipsum elit consequat.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    </Carousel.Slide>
  </Carousel>
  
  )
})