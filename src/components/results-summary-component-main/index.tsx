import { component$ } from "@builder.io/qwik";

import { data } from "./data";

export default component$(() => {
  return (
    <main class="w-screen min-h-[100vh] flex justify-center items-center">
      <section class="flex sm:flex-row flex-col w-[600px] rounded-xl shadow font-Hanken-Grotesk">
        <div
          role="group"
          class="basis-1/2 flex flex-col p-12 text-center bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] sm:rounded-xl rounded-b-3xl"
        >
          <p class="text-lg text-[hsl(241,100%,89%)]">Your Result</p>
          <span class="mx-auto py-8 mt-6 mb-6 w-[128px] h-[128px] bg-gradient-to-b from-[hsla(256,72%,46%,1)] to-[hsla(241,72%,46%,0)] rounded-full">
            <h2 class="text-5xl font-extrabold text-white mb-1">76</h2>
            <p class="text-[hsl(241,100%,89%)]">of 100</p>
          </span>
          <h2 class="text-2xl font-bold text-white mb-4">Great</h2>
          <p class="font-normal leading-5 text-sm text-[hsl(241,100%,89%)]">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div role="group" class="basis-1/2 p-8">
          <h1 class="font-bold text-xl mb-6">Summary</h1>
          <ul class="list-none font-bold">
            {data.map((value, index) => (
              <li
                key={index}
                class={`flex flex-row justify-between items-center w-full my-2 p-4 rounded-xl text-sm ${value.color} ${value.bg}`}
              >
                <span class="flex flex-row items-center">
                  <value.icon class="mr-2" />
                  <p>{value.category}</p>
                </span>
                <p>
                  {value.score}
                  <span class="text-[hsl(240,31%,72%)]"> / 100</span>
                </p>
              </li>
            ))}
          </ul>
          <button class="w-full mt-4 py-4 rounded-full bg-[hsl(224,30%,27%)] text-white">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
});
