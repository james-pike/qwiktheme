import { component$, useStore, useTask$ } from '@builder.io/qwik';

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default component$(() => {
  // Store for grid items with random animation properties
  const gridItemsStore = useStore({
    gridItems: new Array(30).fill(null).map(() => ({
      animationDelay: `${getRandomInt(0, 5)}s`,
      animationDuration: `${getRandomInt(3, 6)}s`,
    })),
  });

  // Task to apply the animation delay/duration after hydration
  useTask$(() => {
    // Logic to execute after component is hydrated, if needed
    console.log('Grid items loaded and animations are ready.');
  });

  return (
    <div class="relative min-h-screen flex items-center justify-center bg-bgAccent overflow-hidden">
      {/* Grid background */}
      <div class="grid-background absolute inset-0 p-2 grid grid-cols-6 gap-1 transform -skew-y-12 scale-100">
        {gridItemsStore.gridItems.map((item, index) => (
          <div
            key={index}
            class="bg-secondary rounded animate-pulse"
            style={{
              animationDelay: item.animationDelay,
              animationDuration: item.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div class="relative">
        <h2 class="text-4xl text-white font-extrabold">
          Welcome <span class="text-purple-500">Grid</span> Background
        </h2>
      </div>
    </div>
  );
});
