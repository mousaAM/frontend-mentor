import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import AgeCalculatorAppComponent from "~/components/age-calculator-app-main";

export default component$(() => {
  return <AgeCalculatorAppComponent />;
});

export const head: DocumentHead = {
  title: "Frontend mentor challenges - Mousa Aboubaker: Age Calculator App",
  meta: [
    {
      name: "description",
      content:
        "This website contains my solutions for frontend mentor challenges",
    },
  ],
};
