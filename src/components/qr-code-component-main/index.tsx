import { component$ } from "@builder.io/qwik";
import QRCodeImage from "./images/image-qr-code.png";

export default component$(() => {
  return (
    <div class="w-screen h-screen flex justify-center items-center bg-[hsl(212,45%,89%)] text-center">
      <div class="xs:w-[330px] w-[85%] flex flex-col bg-white p-4 rounded-3xl">
        <img class="rounded-xl" src={QRCodeImage} alt="QR Code Image" />
        <h2 class="my-6 mx-2 xs:text-2xl text-xl text-[hsl(218,44%,22%)] font-bold font-outfit">
          Improve your front-end skills by building projects
        </h2>
        <p class="mx-2 font-outfit text-[hsl(220,15%,55%)] leading-tight">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
});
