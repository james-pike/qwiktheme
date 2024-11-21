import { component$, useStore } from "@builder.io/qwik";
import { getFromLocalStorage, setToLocalStorage } from "./localstoragehelper";


interface FontSwitcherProps {
  iconClass?: string;
}

export default component$((props: FontSwitcherProps) => {
  const { iconClass } = props;
  const store = useStore({
    font: getFromLocalStorage('font') || 'sans-serif',  // Default font
  });

  return (
    <button
      type="button"
      class="text-gray-500 hover:bg-primary-500 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Switch font"
      onClick$={() => {
        const newFont = store.font === 'sans-serif' ? 'serif' : 'sans-serif';  // Toggle font
        document.documentElement.style.fontFamily = newFont;  // Apply font
        setToLocalStorage('font', newFont);  // Store font in localStorage
        store.font = newFont;  // Update store
      }}
    >
      <span class={`${iconClass} md:text-black`}>
        {store.font === 'serif' ? 'Serif Font' : 'Sans-Serif Font'}
      </span>
    </button>
  );
});
