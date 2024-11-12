import { component$ } from "@builder.io/qwik";

// @ts-ignore
const logoSrc = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%3E%3Cpath%20d%3D%22M0%200%20C7.26%200%2014.52%200%2022%200%20C22%2016.5%2022%2033%2022%2050%20C14.74%2050%207.48%2050%200%2050%20C0%2033.5%200%2017%200%200%20Z%20%22%20fill%3D%22%23AC7EF5%22%20transform%3D%22translate(31%2C3)%22%2F%3E%3Cpath%20d%3D%22M0%200%20C7.26%200%2014.52%200%2022%200%20C22%2016.5%2022%2033%2022%2050%20C14.74%2050%207.48%2050%200%2050%20C0%2033.5%200%2017%200%200%20Z%20%22%20fill%3D%22%2319B6F6%22%20transform%3D%22translate(3%2C3)%22%2F%3E%3C%2Fsvg%3E";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={32}
      height={32}
      alt="Qwind Logo"
      loading="lazy"
    />
    Qwind
  </span>
));
