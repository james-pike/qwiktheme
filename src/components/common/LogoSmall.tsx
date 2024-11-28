import { component$ } from "@builder.io/qwik";

export default component$(() => (
  <span class="self-center mr-1 text-2xl md:text-xl font-bold whitespace-nowrap dark:text-white flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 56 56"
    >
      <path
        d="M0 0 C7.26 0 14.52 0 22 0 C22 16.5 22 33 22 50 C14.74 50 7.48 50 0 50 C0 33.5 0 17 0 0 Z"
        fill="var(--color-secondary)"
        transform="translate(31,3)"
      />
      <path
        d="M0 0 C7.26 0 14.52 0 22 0 C22 16.5 22 33 22 50 C14.74 50 7.48 50 0 50 C0 33.5 0 17 0 0 Z"
        fill="var(--color-primary)"
        transform="translate(3,3)"
      />
    </svg>
  </span>
));
