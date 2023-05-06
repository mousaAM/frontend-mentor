import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ResultsSummaryComponent from "~/components/results-summary-component-main";

export default component$(() => {
  return <ResultsSummaryComponent />;
});

export const head: DocumentHead = {
  title:
    "Frontend mentor challenges - Mousa Aboubaker: Results Summary Component",
  meta: [
    {
      name: "description",
      content:
        "This website contains my solutions for frontend mentor challenges",
    },
  ],
};
