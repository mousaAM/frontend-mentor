import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { links } from "./data";

import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div
        style="
          background: linear-gradient(#00c6ff, #0072ff);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        "
        class="w-full py-8 text-center font-bold"
      >
        <h1 class="text-3xl font-poppins">Frontend mentor challenges</h1>
      </div>
      <div class="flex flex-row flex-wrap justify-evenly p-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            class="sm:basis-[calc(100%/4-1rem)] basis-full h-fit flex flex-col items-center border-2 border-gray-900 hover:border-gray-500 hover:bg-gray-50 mt-2 hover:mt-0 rounded-3xl"
          >
            <p class="my-4 font-poppins">{link.title}</p>
            <img
              src={link.image}
              alt={link.url}
              class="rounded-b-3xl aspect-video object-cover"
            />
          </Link>
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Frontend mentor challenges - Mousa Aboubaker",
  meta: [
    {
      name: "description",
      content:
        "This website contains my solutions for frontend mentor challenges",
    },
  ],
};
