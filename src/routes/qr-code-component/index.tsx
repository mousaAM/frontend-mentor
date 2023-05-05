import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import QRCodeComponent from "~/components/qr-code-component-main";

export default component$(() => {
  return <QRCodeComponent />;
});

export const head: DocumentHead = {
  title: "Frontend mentor challenges - Mousa Aboubaker: QR Code Component",
  meta: [
    {
      name: "description",
      content:
        "This website contains my solutions for frontend mentor challenges",
    },
  ],
};
