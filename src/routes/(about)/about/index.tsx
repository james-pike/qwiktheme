import { component$ } from "@builder.io/qwik";
import SettingsTab from "~/components/widgets/PricingTab";



export default component$(() => {
  

 

  return (
   <div>
    <h1>Etch Tabs</h1>
    <p>Etchy Sketchy doesn'st need tabs, but another site might. The ones are cached and preloaded for qwicker navigation speeds.</p>
    <SettingsTab/>
   </div>
  );
});

