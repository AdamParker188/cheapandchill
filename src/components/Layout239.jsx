"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Miért jó</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Amit kapsz tőlem
              </h2>
              <p className="md:text-md">
                Valódi csomagok, valódi árak, valódi tapasztalatok. Nincs
                rejtett költség, nincs szépítgetés. Csak az, amit szeretsz.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Megfizethető csomagok
              </h3>
              <p>
                Olyan utazások, amelyeket tényleg meg tudsz engedni magadnak.
              </p>
            </div>
            <div className="flex h-full flex-col items-center text-center">
              <div className="mb-6 md:mb-8 aspect-[3/2] w-full overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/3943949/pexels-photo-3943949.jpeg"
                  alt="Relume placeholder image"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Egyszerű foglalás
              </h3>
              <p>Pár kattintás és már készen is vagy az indulásra.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg"
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Egy teljes csomag
              </h3>
              <p>Repülőjegy oda-vissza,szállás és egy ajánlott útiterv</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link to="/package">
                <Button variant="secondary">Fedezz fel</Button>
            </Link>
            <Link to="/package">
                <Button iconRight={<RxChevronRight />} variant="link" size="link">
                  Tovább
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
