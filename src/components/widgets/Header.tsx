import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

import ToggleTheme from "~/components/common/ToggleTheme";
import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import { useTheme } from "~/lib/provider";
import ToggleColor from "../common/ToggleColor";
import Logo from "../common/Logo";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const {themeSig} = useTheme();

  const { menu } = useContent();

  useVisibleTask$(() => {
    themeSig.value = localStorage.getItem("theme") || "default-theme"; // Fallback to 'default-theme' if not set
  });

  return (
    <header
  id="header"
  class={`sticky top-0 z-40 flex-none border-b border-gray-100 ${
    store.isScrolling
      ? "bg-gradient-to-r from-primary via-bgPrimary to-secondary border-gray-100 px-0 py-0 md:backdrop-blur-sm"
      : "bg-gradient-to-r from-primary via-bgPrimary to-secondary shadow-md"
  } transition-all ease-in-out duration-300`}
  window:onScroll$={() => {
    if (!store.isScrolling && window.scrollY >= 10) {
      store.isScrolling = true;
    } else if (store.isScrolling && window.scrollY < 10) {
      store.isScrolling = false;
    }
  }}
>
  <div class="absolute inset-0"></div>
  <div class="relative text-default py-2 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
    <div class="mr-auto flex justify-between">
      <a class="flex items-center" href={"/"}>
        <Logo />
        <div
          class={`text-2xl md:text-xl font-bold whitespace-nowrap tracking-tight ${
            store.isScrolling ? "text-gray-900 dark:text-slate-200" : "text-white"
          }`}
        >
          Webdev.ca
        </div>
      </a>
      <div class="flex items-center md:hidden">
        <ToggleColor iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`} />
        <ToggleTheme iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`} />
        <ToggleMenu iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`} />
      </div>
    </div>
    <nav
      class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto md:mx-5"
      aria-label="Main navigation"
    >
      {/* Navigation code */}
    </nav>
    <div class="hidden md:flex items-center justify-end">
      <div class="flex">
        <ToggleTheme iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`} />
        <ToggleColor iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`} />
      </div>
      <a
        href="https://aymansor.github.io/Etch-a-Sketch/"
        class="btn btn-primary ml-2 py-2.5 px-5.5 font-semibold shadow-none text-sm"
      >
        Get Started
      </a>
    </div>
  </div>
</header>

  );
});
