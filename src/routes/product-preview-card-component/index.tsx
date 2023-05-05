import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import ProductPreviewCardComponent from "~/components/product-preview-card-component-main";

export default component$(() => {
  return <ProductPreviewCardComponent />;
});

export const head: DocumentHead = {
  title:
    "Frontend mentor challenges - Mousa Aboubaker: Product Preview Card Component",
  meta: [
    {
      name: "description",
      content:
        "This website contains my solutions for frontend mentor challenges",
    },
  ],
  links: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Montserrat:wght@500;700&display=swap",
    },
  ],
};
