import { component$ } from "@builder.io/qwik";

import ImageProductDesktop from "./images/image-product-desktop.jpg";
import ImageProductMobile from "./images/image-product-mobile.jpg";
import { Cart } from "./images/icon-cart";

export default component$(() => {
  return (
    <main class="w-screen min-h-[100vh] py-4 flex justify-center items-center bg-[hsl(30,38%,92%)]">
      <section class="ss:w-fit w-[90%] h-fit flex ss:flex-row flex-col bg-white rounded-lg">
        <img
          class="ss:block hidden rounded-l-lg w-[320px]"
          src={ImageProductDesktop}
          alt="image product desktop"
        />
        <img
          class="ss:hidden block rounded-t-lg w-full"
          src={ImageProductMobile}
          alt="image product mobile"
        />
        <div role="group" class="ss:w-[320px] w-full p-8">
          <p class="font-montserrat tracking-[6px] text-[hsl(228,12%,48%)]">
            PERFUME
          </p>
          <h1 class="font-fraunces ss:text-4xl text-3xl text-[hsl(212,21%,14%)] font-bold ss:mt-6 ss:mb-6 mt-2 mb-4">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p class="font-montserrat text-sm text-[hsl(228,12%,48%)]">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <span class="flex flex-row items-center ss:mt-8 ss:mb-8 mt-6 mb-4">
            <p class="mr-4 font-fraunces text-3xl text-[hsl(158,36%,37%)]">
              $149.99
            </p>
            <del class="font-montserrat text-sm text-[hsl(228,12%,48%)]">
              $169.99
            </del>
          </span>
          <button class="w-full flex justify-center items-start font-montserrat font-bold bg-[hsl(158,36%,37%)] hover:bg-[hsl(158,37%,20%)] text-white text-center py-4 rounded-lg">
            <Cart class="mr-3" />
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
});
