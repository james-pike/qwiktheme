import { component$, useStore } from "@builder.io/qwik";
import { Popover } from "@qwik-ui/headless";
import IconApps from "../icons/IconApps";
import { useTheme } from "~/lib/provider";

interface ItemProps {
  iconClass?: string;
}

const themes = [
    { name: 'theme-indigo', color: 'bg-indigo-500' },
    { name: 'theme-blue', color: 'bg-blue-500' },
    { name: 'theme-green', color: 'bg-green-500' },
    { name: 'theme-red', color: 'bg-red-500' },
    { name: 'theme-yellow', color: 'bg-yellow-500' },
    { name: 'theme-purple', color: 'bg-violet-500' },
    { name: 'theme-orange', color: 'bg-orange-500' },
  ];
  

export default component$((props: ItemProps) => {
  const { iconClass } = props;

//   const store = useStore({
//     isExpanded: false,
//   });

  const { themeSig } = useTheme();

  return (
    <Popover.Root flip={false} gutter={8}>
                <Popover.Trigger>
                  <div class="px-4 py-2 font-medium text-white bg-primary rounded-md cursor-pointer">
                    <IconApps class={iconClass}/>
                  </div>
                </Popover.Trigger>
                <Popover.Panel>
                  <div class="grid gap-4 p-4 bg-gray-100 border border-gray-300 rounded-md shadow-md overflow-hidden">
                    <h4 class="font-medium text-lg">Select a Theme</h4>
                    <div class="grid grid-cols-3 gap-2">
                      {themes.map((theme) => (
                        <div
                          key={theme.name}
                          class={`w-16 h-16 rounded-md ${theme.color} ${
                            themeSig.value === theme.name ? "ring-2 ring-offset-2 ring-black" : ""
                          }`}
                          onClick$={() => themeSig.value = theme.name}
                          aria-label={`Select ${theme.name} theme`}
                        />
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Popover.Root>
  );
});
