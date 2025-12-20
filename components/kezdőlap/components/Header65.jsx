"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header65() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">
          Rólam
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Miért ez az oldal
        </h1>
        <p className="text-text-alternative md:text-md">
          Nem vagyok utazási iroda, hanem egy olyan fiatal, aki már járt a
          világon és tudja, hogyan lehet olcsón utazni. Azt szeretném, ha te is
          megtapasztalhatnád azt, amit én. Az utazás nem luxus, hanem lehetőség.
          Ez az oldal azért van, hogy megmutassam neked, hogyan lehet ezt
          megvalósítani.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Csomagok">Csomagok</Button>
          <Button title="Blog" variant="secondary-alt">
            Blog
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
