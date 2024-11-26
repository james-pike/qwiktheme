import { component$ } from '@builder.io/qwik'
import { Card, Carousel, Heading } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel class="!h-96" pauseOnHover>
      <Carousel.Slide>
     

      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Crystal Clear Oasis</Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-rose-400 dark:bg-rose-700 dark:text-white">
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Lost in the Sands</Heading>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </Carousel.Slide>
    </Carousel>
  )
})