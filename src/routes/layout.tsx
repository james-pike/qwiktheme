import { component$, Slot } from "@builder.io/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { inject } from "@vercel/analytics"


export default component$(() => {
  inject();
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
