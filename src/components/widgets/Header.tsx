import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { useContent } from "@builder.io/qwik-city";

// import ToggleMenu from "~/components/common/ToggleMenu";
import IconChevronDown from "../icons/IconChevronDown";
import { useTheme } from "~/lib/provider";
import ToggleColor from "../common/ToggleColor";
import Logo from "../common/Logo";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { themeSig } = useTheme();

  const { menu } = useContent();

  useVisibleTask$(() => {
    themeSig.value = localStorage.getItem("theme") || "light-blue"; // Fallback to 'default-theme' if not set
  });

  return (
    <header
  id="header"
  class={`sticky bg-gradient-to-r from-secondary via-primary to-bgAccent top-0 z-40 flex-none relative border-2 ${
    store.isScrolling
      ? " border-transparent px-0 py-0 md:backdrop-blur-sm"
      : " shadow-md"
  } transition-all ease-in-out duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-md before:border-[2px] before:border-transparent before:animate-shining-line before:from-transparent before:via-white/80 before:to-transparent before:bg-gradient-to-r before:w-full before:h-full before:pointer-events-none overflow-hidden`}
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
          class={`text-2xl md:text-xl font-bold whitespace-nowrap tracking-tight text-white dark:text-gray-900 
  
          }`}
        >
          Webdev.ca
        </div>
      </a>
      <div class="flex items-center md:hidden">
        <ToggleColor
          iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`}
        />
        {/* <ToggleTheme
          iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`}
        /> */}
        <ToggleMenu
          iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`}
        />
      </div>
    </div>
    <nav
      class="items-center w-full md:w-auto hidden md:flex text-default overflow-y-auto md:mx-5"
      aria-label="Main navigation"
    >
      {menu && menu.items ? (
        <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
          {menu.items.map(({ text, href, items = [] }, key) => (
            <li key={key} class={items.length ? "dropdown" : ""}>
              {items.length ? (
                <>
                  <button
                    class={`hover:text-link ${
                      store.isScrolling
                        ? "text-gray-900 dark:text-slate-200"
                        : "text-gray-900 dark:text-white"
                    } px-4 py-3 flex items-center`}
                  >
                    {text}{" "}
                    <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                  </button>
                  <ul class="dropdown-menu md:backdrop-blur-md dark:md:bg-slate-800 rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white/90 md:min-w-[200px] drop-shadow-xl">
                    {items.map((subItem, key2) => (
                      <li key={key2}>
                        <a
                          class="first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap"
                          href={subItem.href || "#"}
                        >
                          {subItem.text || "Untitled"}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  class={`hover:text-link ${
                    store.isScrolling
                      ? "text-gray-900 dark:text-slate-200"
                      : "text-gray-900 dark:text-white"
                  } px-4 py-3 flex items-center`}
                  href={href || "#"}
                >
                  {text || "Untitled"}
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
    <div class="hidden md:flex items-center justify-end">
      <div class="flex">
        {/* <ToggleTheme
          iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`}
        /> */}
        <ToggleColor
          iconClass={`w-6 h-6 ${store.isScrolling ? "text-gray-900" : "text-white"}`}
        />
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
