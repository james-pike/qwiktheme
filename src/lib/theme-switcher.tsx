import { component$, useStore } from "@builder.io/qwik";
import { applyTheme, getSavedTheme } from "~/lib/theme";

interface ThemeSwitcherProps {
  iconClass?: string;
}

export default component$((props: ThemeSwitcherProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme: getSavedTheme(),  // Fetch saved theme from localStorage
  });

  return (
    <button
      type="button"
      class="text-gray-500 dark:text-gray-400 hover:bg-primary-500 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle theme"
      onClick$={() => {
        const newTheme = store.theme === 'green-light' ? 'green-dark' : 'green-light';
        applyTheme(newTheme);  // Apply the new theme
        store.theme = newTheme;  // Update store
      }}
    >
      <span class={`${iconClass} md:text-black`}>
        {store.theme === 'green-dark' ? '🌙' : '🌞'} {/* Example icons */}
      </span>
    </button>
  );
});
