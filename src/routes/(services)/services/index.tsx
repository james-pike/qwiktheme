import { component$ } from "@builder.io/qwik";

import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("~/components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("~/components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("~/components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("~/components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("~/components/icons/IconBulb"));


import Pricing from "~/components/widgets/Pricing";

import Contact2 from "~/components/widgets/Contact2";
import Test2 from "~/components/widgets/Test2";


export default component$(() => {

 

  
  return (
    <>
   
     
      <Features
  highlight="Our Services"
  title="What We Do For You"
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
      <Steps />
      {/* <svg xmlns="http://www.w3.org/2000/svg" class="mx-0" viewBox="0 0 1000 100" fill="#FF6464"><path d="M0 0v100l500-48 500 48V0H0z" opacity=".5"></path><path d="M0 0h1000v52H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z" opacity=".5"></path><path d="M0 0v4l500 48 500-48V0H0z"></path></svg> */}


      <Pricing
  highlight="Pricing Plans"
  title="Flexible Pricing Options"
  subtitle="All the above services and features jammed into one package."
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

      
 <Test2/>

<Contact2  highlight="Have Some Questions?"
  title="Contact Us!"
  subtitle="Tell us about your project, and we'll get back to you within 24 hours."
  
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
    
     
     
    
      
    </>
  );
});


