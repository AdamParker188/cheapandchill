"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout520() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Miért ez</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Miért éri meg
            </h2>
            <p className="md:text-md">
              Mert nem csak egy utazás, hanem egy élmény.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://picsum.photos/900/600"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://picsum.photos/900/600"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Valódi helyi élmények
              </h3>
              <p className="text-text-alternative">
                Nem turista útvonalak, hanem az igazi város, ahogy a helyiek
                ismerik.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Tudj meg többet
                </Button>
              </div>
            </div>
          </div>
          <div className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://picsum.photos/900/600"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://picsum.photos/900/600"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Kicsi csoportok, nagy barátságok
              </h3>
              <p className="text-text-alternative">
                Tizenöt fő mellett valódi kapcsolatok alakulnak ki, nem pedig
                felületes ismeretségek.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Tudj meg többet
                </Button>
              </div>
            </div>
          </div>
          <div className="relative p-6 md:p-8">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="https://picsum.photos/900/600"
                className="size-full object-cover"
                alt="Relume placeholder image"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-5 md:mb-6">
                <img
                  src="https://picsum.photos/900/600"
                  className="size-12"
                  alt="Relume logo"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-text-alternative md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Megfizethető árak, nincs csalás
              </h3>
              <p className="text-text-alternative">
                Minden benne van, amit ígérünk. Nincs rejtett költség, nincs
                csalás, csak őszinte utazás.
              </p>
              <div className="mt-5 flex items-center md:mt-6">
                <Button
                  variant="link-alt"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Tudj meg többet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
