"use client";

import React from "react";
import { BiCheck, BiX } from "react-icons/bi";

export function Comparison14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Kapcsolat</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Maradj kapcsolatban velem
          </h2>
          <p className="md:text-md">
            Közösség, támogatás és utazási történetek egy helyen
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="rb-4 mb-3 flex max-w-[18rem] flex-col items-center md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Product image 1"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Adatvédelem
                </h3>
                <p className="mb-5 md:mb-6">Az adataid biztonságban vannak</p>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Személyes adatok kezelése</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Védett
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Sütik és nyomkövetés</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Szabályozott
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Harmadik fél megosztása</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Soha
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Adatmegőrzési időszak</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Korlátozott
                  </h6>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-4 py-2 md:mt-8">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Teljes adatvédelmi szabályzat megtekintése</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Felhasználási feltételek elolvasása</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiX className="size-6" />
                  </div>
                  <p>Sütik beállításainak módosítása</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiX className="size-6" />
                  </div>
                  <p>Kapcsolatfelvétel az adatvédelemről</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
            <div>
              <div className="flex flex-col items-center text-center">
                <div className="rb-4 mb-3 flex max-w-[18rem] flex-col items-center md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Product image 1"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Közösség
                </h3>
                <p className="mb-5 md:mb-6">Ahol a fiatalok találkoznak</p>
              </div>
              <div className="grid grid-cols-1">
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Közösségi csatornák</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Aktív
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Napi utazási tippek</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Rendszeres
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Felhasználói visszajelzések</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Hallgatott
                  </h6>
                </div>
                <div className="flex justify-between gap-4 border-b border-border-primary py-6 first:border-t">
                  <p>Közösségi események</p>
                  <h6 className="text-md font-bold leading-[1.4] md:text-lg md:leading-[1.4]">
                    Havi
                  </h6>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-4 py-2 md:mt-8">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Csatlakozz az Instagram közösséghez</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Oszd meg az utazási történetedet</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Kérdezz meg bármit a közösségtől</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Találj utazótársakat a világban</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
