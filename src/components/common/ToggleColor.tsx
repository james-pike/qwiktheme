import { component$, useSignal } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import IconApps from "../icons/IconApps";
import { useTheme } from "~/lib/provider";

interface ItemProps {
  iconClass?: string;
}

const themes = [
  { name: "dark-green", color: "bg-green-500", mode: "dark" },
  { name: "light-green", color: "bg-green-500", mode: "light" },
  { name: "dark-blue", color: "bg-blue-500", mode: "dark" },
  { name: "light-blue", color: "bg-blue-500", mode: "light" },
  { name: "dark-red", color: "bg-red-500", mode: "dark" },
  { name: "light-red", color: "bg-red-500", mode: "light" },
  { name: "dark-purple", color: "bg-purple-500", mode: "dark" },
  { name: "light-purple", color: "bg-violet-500", mode: "light" },
];

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const { themeSig } = useTheme();

  // Fallback to light mode if `themeSig.value` is undefined
  const currentTheme = themeSig.value ?? "light";
  const isDarkMode = currentTheme.includes("dark");

  // Filter themes based on current mode
  const filteredThemes = themes.filter((theme) =>
    isDarkMode ? theme.mode === "dark" : theme.mode === "light"
  );

  const isOpen = useSignal(false);


  return (
    <Popover.Root>
      <Popover.Trigger>
        <div
          class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer"
          onClick$={() => (isOpen.value = !isOpen.value)} // Toggle popover state
        >
          <IconApps class={iconClass} />
        </div>
      </Popover.Trigger>
      {isOpen.value && ( // Render Popover.Panel only when isOpen is true
        <Popover.Panel>
          <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
            <h4 class="font-medium text-lg">Select a Theme</h4>
            <div class="grid grid-cols-3 gap-2">
              {filteredThemes.map((theme) => (
                <div
                  key={theme.name}
                  class={`w-16 h-16 rounded-md ${theme.color} ${
                    currentTheme === theme.name
                      ? "ring-2 ring-offset-2 ring-black"
                      : ""
                  }`}
                  onClick$={() => {
                    isOpen.value = false;
                    themeSig.value = theme.name; // Set theme
                     // Close popover
                  }}
                  aria-label={`Select ${theme.name} theme`}
                />
              ))}
            </div>
          </div>
        </Popover.Panel>
      )}
    </Popover.Root>
  );
});
