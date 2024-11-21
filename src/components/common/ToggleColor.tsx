import { component$, useSignal } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import IconApps from "../icons/IconApps";
import { useTheme } from "~/lib/provider";

interface ItemProps {
  iconClass?: string;
}

const themes = [
  { name: "dark-green", color: "bg-green-700", mode: "dark" },
  { name: "light-green", color: "bg-green-300", mode: "light" },
  { name: "dark-blue", color: "bg-blue-700", mode: "dark" },
  { name: "light-blue", color: "bg-blue-300", mode: "light" },
  { name: "dark-red", color: "bg-red-700", mode: "dark" },
  { name: "light-red", color: "bg-red-300", mode: "light" },
  { name: "dark-purple", color: "bg-purple-700", mode: "dark" },
  { name: "light-purple", color: "bg-violet-300", mode: "light" },
  { name: "dark-black", color: "bg-gray-900", mode: "dark" }, // Black theme for dark mode
  { name: "light-black", color: "bg-gray-400", mode: "light" }, // Light gray as "black" variant for light mode
  { name: "dark-orange", color: "bg-orange-700", mode: "dark" },
  { name: "light-orange", color: "bg-orange-300", mode: "light" },
  { name: "dark-yellow", color: "bg-yellow-700", mode: "dark" },
  { name: "light-yellow", color: "bg-yellow-300", mode: "light" },
  { name: "dark-cyan", color: "bg-cyan-700", mode: "dark" },
  { name: "light-cyan", color: "bg-cyan-300", mode: "light" },
  { name: "dark-teal", color: "bg-teal-700", mode: "dark" },
  { name: "light-teal", color: "bg-teal-300", mode: "light" },
  { name: "dark-pink", color: "bg-pink-700", mode: "dark" },
  { name: "light-pink", color: "bg-pink-300", mode: "light" }
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



  return (
    <Popover.Root flip={false} gutter={8}  >
      <Popover.Trigger>
        <div class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer">
          <IconApps class={iconClass} />
        </div>
      </Popover.Trigger>
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
                onClick$={() => (themeSig.value = theme.name)}
                aria-label={`Select ${theme.name} theme`}
              />
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});
