"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiLogoTiktok, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Contact14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Elérhetőség</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Kapcsolat velem
          </h2>
          <p className="md:text-md">Több módja van, hogy elérhess.</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                E-mail
              </h3>
              <p className="mb-2">Az egyszerűbb megoldás.</p>
              <a className="underline" href="#">
                CheapAndChill@gmail.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiLogoTiktok className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Tiktok
              </h3>
              <p className="mb-2">Ha már úgyis követsz</p>
              <a className="underline" href="#">
                tiktok.com
              </a>
            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Instagram
              </h3>
              <p className="mb-2">Ahol a legtöbb fiatal jár.</p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Üzenet küldése"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Üzenet küldése
                </Button>
              </div>
            </div>
          </div>
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
