import { component$ } from "@builder.io/qwik";
import IconApps from "~/components/icons/IconApps";
import IconBrandGoogle from "~/components/icons/IconBrandGoogle";
import IconBrandTailwind from "~/components/icons/IconBrandTailwind";
import IconBulb from "~/components/icons/IconBulb";
import IconRocket from "~/components/icons/IconRocket";
import Pricing from "~/components/widgets/Pricing";
import PricingTab from "~/components/widgets/PricingTab";




export default component$(() => {
  

 

  return (
   <div>
    
    <Pricing
  highlight="Pricing"
  title="Flexible Payment Options"
  subtitle="Bringing you the latest in retro design tools—because digital brushes are overrated."
  items={[  
    {},
  ] }
/>
   </div>
  );
});

