import { component$, useStore, $ } from '@builder.io/qwik';
import { Carousel } from '@qwik-ui/headless';

export default component$(() => {
  const store = useStore({
    currentStep: 0,
    steps: [
      {
        title: 'Step 1: Create Your Account',
        description: 'Enter your details to get started with your account setup.',
      },
      {
        title: 'Step 2: Select Your Plan',
        description: 'Choose a plan that works best for your needs.',
      },
      {
        title: 'Step 3: Confirm Your Details',
        description: 'Review your information and confirm to complete signup.',
      },
    ],
  });

  const goToNextStep = $(() => {
    if (store.currentStep < store.steps.length - 1) {
      store.currentStep++;
    }
  });

  const goToPreviousStep = $(() => {
    if (store.currentStep > 0) {
      store.currentStep--;
    }
  });

  return (
    <section class="signup-carousel w-full max-w-lg mx-auto font-headline">
      <Carousel.Root class="carousel-root" gap={30}>
        {/* Stepper */}
        <Carousel.Stepper class="carousel-stepper flex justify-center space-x-4">
          {store.steps.map((_, index) => (
            <Carousel.Step
              key={index}
              class={`carousel-step py-2 px-4 border-b-2 ${
                store.currentStep === index
                  ? 'border-primary text-primary'
                  : 'border-transparent text-secondary'
              }`}
            >
              Step {index + 1}
            </Carousel.Step>
          ))}
        </Carousel.Stepper>

        {/* Scroller with Steps */}
        <Carousel.Scroller class="carousel-scroller mt-6">
          {store.steps.map((step, index) => (
            <Carousel.Slide
              key={index}
              class="carousel-slide bg-bgLight p-6 rounded-lg shadow-md"
            >
              <h2 class="text-lg font-semibold text-primary">{step.title}</h2>
              <p class="mt-2 text-sm text-secondary">{step.description}</p>
              <div class="mt-4 flex justify-between">
                <button
                  class={`btn px-4 py-2 rounded ${
                    store.currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick$={goToPreviousStep}
                  disabled={store.currentStep === 0}
                >
                  Back
                </button>
                <button
                  class={`btn px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark ${
                    store.currentStep === store.steps.length - 1
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  onClick$={goToNextStep}
                  disabled={store.currentStep === store.steps.length - 1}
                >
                  Next
                </button>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel.Scroller>
      </Carousel.Root>
    </section>
  );
});
