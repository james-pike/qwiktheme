import { component$, useSignal, $, QRL } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';
import  IconApps  from '~/components/icons/IconApps';

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
    <section class="testimonials-carousel w-full max-w-4xl mx-auto font-headline">
      <Carousel.Root
        class="carousel-root relative"
        gap={30}
        autoPlayIntervalMs={8500}
        bind:autoplay={isPlaying}
      >
        {/* Navigation Buttons */}
        <div class="carousel-buttons flex justify-center items-center space-x-4 absolute top-0 right-0 mt-4 mr-4">
          <Carousel.Previous class="btn bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark">
            Prev
          </Carousel.Previous>
          <Carousel.Player
            class="btn bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
          >
            {isPlaying.value ? <IconApps /> : <IconApps />}
          </Carousel.Player>
          <Carousel.Next class="btn bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark">
            Next
          </Carousel.Next>
        </div>

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
