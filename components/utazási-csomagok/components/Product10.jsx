"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Csomagok</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Utazások
            </h1>
            <p className="mt-5 text-base md:mt-6 md:text-md">
              Minden csomag egy új történet, egy új kaland vár rád.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Lisszabon kaland</h3>
                <div className="text-sm">Kedvenc</div>
              </div>
              <div className="text-md font-semibold md:text-lg">45€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Barcelonai utazás</h3>
                <div className="text-sm">Újdonság</div>
              </div>
              <div className="text-md font-semibold md:text-lg">52€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Prágai csomag</h3>
                <div className="text-sm">Legolcsóbb</div>
              </div>
              <div className="text-md font-semibold md:text-lg">38€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Bukaresti élmény</h3>
                <div className="text-sm">Újdonság</div>
              </div>
              <div className="text-md font-semibold md:text-lg">35€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Athéni kaland</h3>
                <div className="text-sm">Kedvenc</div>
              </div>
              <div className="text-md font-semibold md:text-lg">48€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
          <div>
            <a href="#" className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a href="#" className="flex flex-col text-center md:text-md">
              <div className="mb-2">
                <h3 className="font-semibold">Krakkói túra</h3>
                <div className="text-sm">Legolcsóbb</div>
              </div>
              <div className="text-md font-semibold md:text-lg">40€</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="Foglalj most"
              className="mt-3 w-full md:mt-4"
            >
              Foglalj most
            </Button>
          </div>
        </div>
        <div className="mt-10 flex justify-center md:mt-14 lg:mt-16">
          <Button
            variant="secondary"
            size="primary"
            title="Összes megtekintése"
          >
            Összes megtekintése
          </Button>
        </div>
      </div>
    </section>
  );
}
