import { component$ } from "@builder.io/qwik";
import Contact2 from "~/components/widgets/Contact2";



export default component$(() => {
  
  return (
   <div>
    <Contact2  highlight="Pricing"
  title="Flexible Payment Options"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  
  items = {[{
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",  
  },
  {
    title: "Ready-to-Use Blank Slate",
    description: "Start each masterpiece with a fresh gray screen. No distractions, just you, two knobs, and endless possibilities (of frustration).",  
  },
  {
    title: "Minimalist Best Practices",
    description: "Forget layers, colors, or undo buttons—embrace the simplicity! One line at a time, one misstep away from starting over.",  
  },
  {
    title: "Blazing Erase Speed",
    description: "Need a redo? Just flip, shake, and presto! Instant erase. Say goodbye to your previous work in a flash (whether you like it or not).",  
  },
  {
    title: "Classic Knob Control Integration",
    description: "Precision-engineered for the perfect wobbly line. Rotate left for vertical, right for horizontal, and pray for the best!",    
  },

]}
  />
   </div>
  );
});

