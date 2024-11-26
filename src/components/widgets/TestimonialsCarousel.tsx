import { component$ } from '@builder.io/qwik'
import { Card, Carousel, Heading } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover class="">
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <Card href="#" class="max-w-7xl">
            {/* <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading> */}
            <figure class="px-6 py-2 bg-gray-50 rounded dark:bg-gray-800">
                  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                      <p class="my-4">"This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
                  </blockquote>
                  <figcaption class="flex items-center space-x-3">
                      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"/>
                      <div class="space-y-0.5 font-medium dark:text-white">
                          <div>Bonnie Green</div>
                          <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
                      </div>
                  </figcaption>    
              </figure>
          </Card>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-blue-400 dark:bg-blue-700 dark:text-white">
          <Card href="#" class="max-w-sm">
            <Heading tag="h4">Solid Foundation For Any Project</Heading>
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