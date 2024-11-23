import { component$, useComputed$ } from "@builder.io/qwik";
import { useTheme } from "~/lib/provider";

const colorThemes = [
  { name: "dark-green", primary: "1F7735" },
  { name: "light-green", primary: "3CB371" },
  { name: "dark-blue", primary: "146EF8" },
  { name: "light-blue", primary: "5BA8F7" },
  { name: "dark-red", primary: "9E1C1C" },
  { name: "light-red", primary: "F76C6C" },
  { name: "dark-purple", primary: "5B217F" },
  { name: "light-purple", primary: "D0A1F5" },
  { name: "dark-black", primary: "212121" },
  { name: "light-black", primary: "B5B5B5" },
  { name: "dark-orange", primary: "D1631A" },
  { name: "light-orange", primary: "F7A768" },
  { name: "dark-yellow", primary: "946A09" },
  { name: "light-yellow", primary: "FACC68" },
  { name: "dark-cyan", primary: "136E6E" },
  { name: "light-cyan", primary: "76D7D7" },
  { name: "dark-teal", primary: "12564A" },
  { name: "light-teal", primary: "63B8A8" },
  { name: "dark-pink", primary: "8B2756" },
  { name: "light-pink", primary: "F28AB7" },
];

export default component$(() => {
  const { themeSig } = useTheme();

  const primaryColor = useComputed$(() => {
    const themeValue = themeSig.value ?? "";
    const currentTheme = colorThemes.find((theme) => themeValue.includes(theme.name));
    return currentTheme ? currentTheme.primary : "000000";
  });

  return (
    <section class="relative h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        class="absolute inset-0 w-full h-full"
        style={{
          transform: "scaleY(-1)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201920%20861%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22wave-gradient%22%20x1%3D%220%25%22%20x2%3D%220%25%22%20y1%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23${encodeURIComponent(
            primaryColor.value
          )}%22%20stop-opacity%3D%220%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23${encodeURIComponent(
            primaryColor.value
          )}%22%20stop-opacity%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20fill%3D%22url(%23wave-gradient)%22%20width%3D%221920%22%20height%3D%22861%22%20%2F%3E%3Cg%3E%3Cpath%20fill%3D%22url(%23wave-gradient)%22%20d%3D%22M0%20430C480%20430%20480%20520%20960%20520C1440%20520%201440%20430%201920%20430V861H0Z%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22translate%22%20values%3D%220%200%3B-960%200%3B0%200%22%20dur%3D%2210s%22%20repeatCount%3D%22indefinite%22%20%2F%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div class="relative max-w-7xl mx-auto lg:px-12 lg:gap-20 lg:mt-8 px-4 sm:px-6 flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left">
        <div class="lg:basis-1/2 pb-10 md:pb-16">
          <h1 class="text-6xl md:text-6xl text-tBase font-bold leading-tighter tracking-tighter mb-4 font-heading">
            Build A Better {" "}<br class="hidden lg:block" />
            <span class="text-primary">Website</span>
          </h1>
          <p class="text-xl text-muted text-tBase mb-6 text-gray-900 max-w-3xl mx-auto lg:max-w-none">
            Master the lines, embrace the quirks, and turn every twist into a masterpiece—because
            art's all about the journey, not the perfect line.
          </p>
          <div class="sm:max-w-md flex flex-col sm:flex-row sm:justify-center gap-4 lg:justify-start">
            <a
              class="btn bg-primary text-white font-bold w-full p-2"
              href="https://aymansor.github.io/Etch-a-Sketch/"
              target="_blank"
              rel="noopener"
            >
              Start Etching
            </a>
            <button class="btn w-full bg-secondary p-2">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
});
