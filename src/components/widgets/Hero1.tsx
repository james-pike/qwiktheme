import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  // Array of theme colors
  const themeColors = ["theme-indigo", "theme-red", "theme-orange", "theme-yellow", "theme-green", "theme-blue", "theme-violet"];

  // Signal to store the selected theme color
  const selectedTheme = useSignal("");

  // Load theme from localStorage once component is mounted
  useVisibleTask$(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme && themeColors.includes(savedTheme)) {
      selectedTheme.value = savedTheme;
    }
  });

  return (
    <main class={`flex flex-col min-h-screen gap-16 p-24 bg-white ${selectedTheme.value}`}>
      <div class="flex mb-8">
        <label for="theme-selector" class="mr-4 text-lg font-medium">
          Choose Theme:
        </label>
        <select
          id="theme-selector"
          class="p-2 border border-gray-300 rounded"
          value={selectedTheme.value || "theme-indigo"} // Fallback to theme-indigo if empty
          onChange$={(e) => {
            const target = e.target as HTMLSelectElement;
            const newTheme = target.value;
            selectedTheme.value = newTheme;
            localStorage.setItem("selectedTheme", newTheme); // Store selected theme
          }}
        >
          {themeColors.map((color) => (
            <option key={color} value={color}>
              {color.replace("theme-", "").charAt(0).toUpperCase() + color.slice(6)}
            </option>
          ))}
        </select>
      </div>

      <div class="grid grid-cols-12 gap-8">
        <div class="relative col-span-6 col-start-1 overflow-hidden rounded-md aspect-video">
          <Image src={""} alt="Image" fill objectFit="cover" />
          <div class="absolute inset-0 bg-transparent opacity-50 hover:bg-secondary" />
        </div>
        <div class="flex flex-col items-start col-span-6 gap-4">
          <h1 class="text-4xl font-bold text-primary">
            Woodside Creek Paradise
          </h1>
          <p class="flex-1">
            Your own piece of paradise awaits you. Nestled among oak trees, this
            home is tucked away on nearly half an acre overlooking a seasonal
            creek at the end of a quiet cul-de-sac with access to trails. This
            move-in ready sunny home features abundant natural light and forest
            views from every room. Highlights include hardwood floors, an
            updated kitchen with stainless steel appliances, dedicated
            off-street parking, and sunny spaces for flower/vegetable gardens.
          </p>
          <div class="flex gap-4">
            <button class="px-6 py-2 font-medium text-white bg-primary rounded-md hover:bg-slate-500">
              Buy now
            </button>
            <button class="px-6 py-2 font-medium bg-white border-2 rounded-md border-slate-500 hover:border-black">
              Explore
            </button>
          </div>
        </div>
      </div>
    </main>
  );
});
