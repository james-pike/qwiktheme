import { component$ } from '@builder.io/qwik'
import { Card, Carousel } from 'flowbite-qwik'

export default component$(() => {
  return (
    <Carousel pauseOnHover class="!h-96">
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-bgAccent dark:bg-gray-700 dark:text-white">
          <Card href="#" class="max-w-sm">
            {/* <Heading tag="h4">Noteworthy technology acquisitions 2021</Heading> */}
            <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
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
        <div class="flex h-full items-center justify-center bg-bgLight dark:bg-blue-700 dark:text-white">
          <Card href="#" class="max-w-sm">
          <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
                  <blockquote class="text-sm text-gray-500 dark:text-gray-400">
                      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">The best for small businesses!</h3>
                      <p class="my-4">"This is a very complex and beautiful set of elements. It comes with the best things from 2 different worlds: Figma and Tailwind.”</p>
                  </blockquote>
                  <figcaption class="flex items-center space-x-3">
                      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"/>
                      <div class="space-y-0.5 font-medium dark:text-white">
                          <div>Henry Smith</div>
                          <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Open AI</div>
                      </div>
                  </figcaption>    
              </figure>
          </Card>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div class="flex h-full items-center justify-center bg-bgAccent dark:bg-rose-700 dark:text-white">
          <Card href="#" class="max-w-sm">
          <figure class="p-6 bg-gray-50 rounded dark:bg-gray-800">
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
    </Carousel>
  )
})