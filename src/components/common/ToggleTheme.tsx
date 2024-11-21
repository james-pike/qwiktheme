import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import IconSun from "~/components/icons/IconSun";
import IconMoon from "~/components/icons/IconMoon";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme:
      (typeof window !== "undefined" && window.localStorage.theme) ||
      undefined,
  });

  useVisibleTask$(() => {
    const classList = document.documentElement.classList;

    // Check if there is a theme already applied
    const currentTheme = Array.from(classList).find((cls) =>
      cls.startsWith("light-") || cls.startsWith("dark-")
    );

    if (currentTheme) {
      store.theme = currentTheme;
    }
  });

  return (
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-primary-500 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      onClick$={() => {
        console.log("button clicked");
      
        // Extract the current theme
        const currentTheme = store.theme; // e.g., "light-green" or "dark-green"
        const [mode, color] = currentTheme.split("-"); // Split into ["light", "green"] or ["dark", "blue"]
      
        // Determine the new theme based on the current mode
        const newMode = mode === "light" ? "dark" : "light"; // Toggle between "light" and "dark"
        const newTheme = `${newMode}-${color}`; // Construct the new theme, e.g., "dark-green"
      
        // Remove the old theme and add the new theme immediately to the document
        document.documentElement.classList.remove(currentTheme); // Remove the old theme class
        document.documentElement.classList.add(newTheme); // Add the new theme class
      
        // Update the store and localStorage immediately to reflect the change
        store.theme = window.localStorage.theme = newTheme; // Update the store and localStorage
      }}
    >
      {store.theme && store.theme.includes("dark") ? (
        <IconMoon class={`${iconClass} md:text-black`} />
      ) : (
        <IconSun class={`${iconClass} md:text-black`} />
      )}
    </button>
  );
});
