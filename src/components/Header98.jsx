"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";

export function Header98() {
  return (
    <section id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container relative">
        <div className="relative z-10 flex min-h-[32rem] flex-col items-center justify-center p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Fedezd fel a világot elérhető áron
            </h1>
            <p className="text-text-alternative md:text-md">
              Csak egy fiatal srác vagyok, aki szereti az utazást és tudja, hogy
              a költségvetés szoros lehet. Ezért gyűjtöttem össze az aktuálisan legjobb,
              legolcsóbb csomagokat, hogy te is megláthasd a világot. Nincs
              szükséged millióra, csak egy jó tervre és egy kis bátorságra.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <Link to="/package">
                <Button title="Csomagok megtekintése" variant="primary">
                    Csomagok megtekintése
                </Button>
            </Link>
            <Link to="/package">
                  <Button title="Tudj meg többet" variant="secondary-alt">
                      Tudj meg többet
                  </Button>
            
            </Link>

          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
            className="size-full object-cover"
            alt="Relume placeholder image"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  );
}
