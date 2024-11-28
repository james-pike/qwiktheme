import { component$ } from "@builder.io/qwik";
import IconApps from "~/components/icons/IconApps";
import IconBrandGoogle from "~/components/icons/IconBrandGoogle";
import IconBrandTailwind from "~/components/icons/IconBrandTailwind";
import IconBulb from "~/components/icons/IconBulb";
import IconRocket from "~/components/icons/IconRocket";
import Grid2 from "~/components/widgets/grid2";



export default component$(() => {
  
  return (
   <div>
   
<Grid2
  highlight="Features"
  title="What You Get with the Etchy Sketchy"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[
    {
      title: "Classic Knob Control Integration",
      description:
        "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",
      icon: IconBrandTailwind,
    },
    {
      title: "Ready-to-Use Blank Slate",
      description:
        "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",
      icon: IconApps,
    },
    {
      title: "Minimalist Best Practices",
      description:
        "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",
    },
    {
      title: "Blazing Erase Speed",
      description:
        "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",
      icon: IconRocket,
    },
    {
      title: "Zero SEO Required",
      description:
        "No need for search optimization here—your Etch A Sketch designs are fully analog and search engine oblivious. Pure, unfindable art.",
      icon: IconBrandGoogle,
    },
    {
      title: "Room for User Innovation",
      description:
        "Got ideas? Want to add undo functionality? A third knob? Join us in dreaming big, but remember, it’s the journey that counts!",
      icon: IconBulb,
    },
  ]}
/>
   </div>
  );
});

