import { $, component$, useStore } from '@builder.io/qwik';

export const ContactForm = component$(() => {
  const formState = useStore({
    name: '',
    email: '',
    message: '',
    success: false,
    error: false,
  });

  const handleSubmit = $(async (event: { preventDefault: () => void; })=>{
    event.preventDefault();
    try {
        // Example API call
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: formState.name,
                email: formState.email,
                message: formState.message
            })
        });
        if (response.ok) {
            formState.success = true;
            formState.error = false;
            formState.name = '';
            formState.email = '';
            formState.message = '';
        } else throw new Error('Failed to submit form');
    } catch (error) {
        formState.error = true;
        formState.success = false;
    }
})


  return (
    <form
      class="max-w-[440px] mx-auto p-6 bg-bgAccent rounded-md shadow-lg font-headline"
      onSubmit$={handleSubmit}
    >
      <h2 class="text-lg font-bold text-primary mb-4">Get in Touch</h2>
      {formState.success && (
        <div class="text-green-600 mb-4">Your message has been sent successfully!</div>
      )}
      {formState.error && (
        <div class="text-red-600 mb-4">Something went wrong. Please try again.</div>
      )}
      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium text-secondary" for="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          class="w-full border border-gray-300 rounded-md p-2 text-sm"
          value={formState.name}
          onInput$={(e) => (formState.name = (e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium text-secondary" for="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          class="w-full border border-gray-300 rounded-md p-2 text-sm"
          value={formState.email}
          onInput$={(e) => (formState.email = (e.target as HTMLInputElement).value)}
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-medium text-secondary" for="message">
          Your Message
        </label>
        <textarea
          id="message"
          class="w-full border border-gray-300 rounded-md p-2 text-sm"
          rows={4}
          value={formState.message}
          onInput$={(e) => (formState.message = (e.target as HTMLTextAreaElement).value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark"
      >
        Send Message
      </button>
    </form>
  );
});

export default ContactForm;
