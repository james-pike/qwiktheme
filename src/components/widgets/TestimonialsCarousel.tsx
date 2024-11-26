import { component$, useSignal, $ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  const isPlaying = useSignal<boolean>(false);

  const toggleAutoplay = $(() => {
    isPlaying.value = !isPlaying.value;
  });

  const testimonials = [
    {
      quote: "This service is amazing! It transformed my business.",
      author: "John Doe",
    },
    {
      quote: "I couldn't be happier with the results.",
      author: "Jane Smith",
    },
    {
      quote: "Highly recommend to anyone looking for quality and reliability.",
      author: "Sam Wilson",
    },
  ];

  return (
    <section class="testimonials-carousel w-full max-w-4xl mx-auto font-headline relative">
      <Carousel.Root
        class="carousel-root relative"
        gap={30}
        autoPlayIntervalMs={8500}
        bind:autoplay={isPlaying}
      >
        {/* Navigation Buttons */}
        <Carousel.Previous
          class="absolute left-0 top-1/2 transform -translate-y-1/2 btn bg-gray-500 text-white p-3 rounded-full hover:bg-gray-700 flex items-center justify-center"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white" // Explicit stroke color for visibility
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </Carousel.Previous>
        <Carousel.Next
          class="absolute right-0 top-1/2 transform -translate-y-1/2 btn bg-gray-500 text-white p-3 rounded-full hover:bg-gray-700 flex items-center justify-center"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white" // Explicit stroke color for visibility
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </Carousel.Next>

        {/* Scroller */}
        <Carousel.Scroller class="carousel-scroller mt-8">
          {testimonials.map(({ quote, author }, index) => (
            <Carousel.Slide
              key={index}
              class="carousel-slide bg-bgLight p-6 rounded-lg shadow-md"
            >
              <blockquote class="text-lg font-medium text-primary mb-4">
                "{quote}"
              </blockquote>
              <p class="text-sm text-secondary font-semibold">- {author}</p>
            </Carousel.Slide>
          ))}
        </Carousel.Scroller>
      </Carousel.Root>

      {/* Autoplay Toggle */}
      <div class="mt-6 flex justify-center">
        <button
          class="btn bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark"
          onClick$={toggleAutoplay}
        >
          {isPlaying.value ? 'Pause Autoplay' : 'Start Autoplay'}
        </button>
      </div>
    </section>
  );
});
