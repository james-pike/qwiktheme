import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";

import { ThemeProvider } from "~/lib/provider";

export default component$(() => {
  
 

  return (
    <>
    <ThemeProvider
					themes={[
            

						["dark", "light"],
					]}
					attribute="class"
				>
					
				
			
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
      </ThemeProvider>
    </>
  );
});
