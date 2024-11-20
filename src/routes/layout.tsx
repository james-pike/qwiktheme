import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

import { ThemeProvider } from "~/lib/provider";
import { Test } from "./test";



export default component$(() => {
  
 

  return (
    <>
    <ThemeProvider
					themes={[
            

						["dark", "light", "blue"],
					]}
					attribute="class"
				>
					
				
			
      <Header />
      <main>
      <Test/>
        <Slot />
      </main>
      <Footer />
      </ThemeProvider>
    </>
  );
});
