import React from "react";

function Card({
  newUser = "Maha",
  img = "https://images.pexels.com/photos/17446369/pexels-photo-17446369/free-photo-of-reflection-of-woman-taking-pictures-with-camera-in-mirror.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
}) {
  return (
    <figure class="md:flex  bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-5">
      <img
        class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={img}
        alt=""
        width="104"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium text-red-500">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-red-400">{newUser} Dayan</div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;
