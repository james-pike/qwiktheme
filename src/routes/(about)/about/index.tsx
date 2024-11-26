import { component$ } from "@builder.io/qwik";
import SettingsTab from "~/components/widgets/PricingTab";
import StepsCarousel from "~/components/widgets/StepsCarousel";



export default component$(() => {
  

 

  return (
   <div>
   <StepsCarousel/>
    <SettingsTab/>
   </div>
  );
});

