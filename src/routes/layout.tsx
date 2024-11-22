import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { ThemeProvider } from "~/lib/provider";
export default component$(() => {

  return (
    <>
      <ThemeProvider
        defaultTheme="light-green" themes={['light-green', 'dark-green', 'light-blue', 'dark-blue', 'light-yellow', 'dark-yellow']} attribute="class">
        <Header />
        <main>
          <Slot />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
});
