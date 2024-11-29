import { $, component$, useVisibleTask$ } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import IconApps from "../icons/IconApps";

interface ItemProps {
  iconClass?: string;
}

const hues = [0, 30, 60, 120, 180, 210, 240, 270, 300, 330]; // Hue values for various colors

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  // Load the hue from localStorage and apply it on page load
  useVisibleTask$(() => {
    const savedHue = window.localStorage.getItem("hue");
    if (savedHue) {
      document.documentElement.style.setProperty("--color-hue", savedHue);
    }
  });

  const updateHue = $((hue: number) => {
    document.documentElement.style.setProperty("--color-hue", hue.toString());
    window.localStorage.setItem("hue", hue.toString());
  });

  return (
    <Popover.Root flip={false} gutter={8}>
      <Popover.Trigger>
        <div class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer">
          <IconApps class={iconClass} />
        </div>
      </Popover.Trigger>
      <Popover.Panel>
        <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
          <h4 class="font-medium text-lg">Select a Theme Hue</h4>
          <div class="grid grid-cols-5 gap-2">
            {hues.map((hue) => (
              <div
                key={hue}
                class="w-16 h-16 rounded-md cursor-pointer"
                style={{
                  backgroundColor: `hsl(${hue}, 70%, 50%)`,
                }}
                onClick$={() => updateHue(hue)}
                aria-label={`Select hue ${hue}`}
              />
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover.Root>
  );
});
