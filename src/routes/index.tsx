import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { links } from "./data";

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
        <h1 class="sm:text-3xl text-xl font-poppins">
          Frontend-mentor projects
        </h1>
      </div>
      <div class="flex flex-row flex-wrap justify-center p-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            class="basis-[calc(100%/4-1rem)] flex flex-col items-center border-2 border-gray-900 hover:border-gray-500 hover:bg-gray-50 mt-2 hover:mt-0 rounded-3xl"
          >
            <p class="my-4 font-poppins">{link.title}</p>
            <img src={link.image} alt={link.url} class="rounded-b-3xl" />
          </Link>
        ))}
      </div>
    </>
  );
});
