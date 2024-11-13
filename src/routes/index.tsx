import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      
      <Features
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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#FF0000"><path d="M0 0v84l500 16 500-16V0H0z" opacity=".2"></path><path d="M0 0v64l500 36 500-36V0H0z" opacity=".4"></path><path d="M0 0v44l500 56 500-56V0H0z" opacity=".4"></path><path d="M0 0v24l500 76 500-76V0H0z" opacity=".5"></path><path d="M0 0v4l500 96 500-96V0H0z"></path></svg>
      <Steps />
    
      <FAQs
  title="Frequently Asked Questions"
  subtitle="Answers to questions you didn't know you had about designing with an Etch A Sketch."
  highlight="FAQs"
  items={[
    {
      title: "What do I need to start?",
      description:
        "Two knobs, a steady hand, and an ocean of patience. Warning: artistic frustration levels may reach new heights.",
    },
    {
      title: "How do I create detailed designs with an Etch A Sketch?",
      description:
        "Simply turn the knobs with millimeter precision for each line segment. If you mess up... well, welcome to square one!",
    },
    {
      title: "Why does my artwork keep getting erased?",
      description:
        "Good question! Turns out an Etch A Sketch isn't very forgiving. But hey, practice makes... slightly better?",
    },
    {
      title: "What if my hand slips?",
      description:
        "Embrace the chaos! Call it 'abstract art' and tell everyone it's intentional. Alternatively, prepare for the 'shake and start over' technique.",
    },
    {
      title: "How can I add color to my designs?",
      description:
        "Oh, that's easy! Just imagine it really hard. Unfortunately, actual color is a bit beyond the Etch A Sketch's capabilities...for now.",
    },
    {
      title: "What’s the most advanced Etch A Sketch technique?",
      description:
        "Rumor has it, there's a mystical move called 'The Perfect Circle' that only a select few have mastered. But beware, trying it may result in endless squiggles and slight existential dread.",
    },
  ]}
/>
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
