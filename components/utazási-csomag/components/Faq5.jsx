"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";
import { RxPlus } from "react-icons/rx";

export function Faq5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Kérdések
          </h2>
          <p className="md:text-md">
            Mindent tudnod kell az utazásodról mielőtt elindulsz.
          </p>
        </div>
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-4"
        >
          <AccordionItem
            value="item-0"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Hol alszom majd?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Hostelekben és egyszerű szálláshelyeken szállsz, ahol más
              fiatalokkal találkozhatsz. Minden hely biztonságos és tiszta, az
              ár pedig már benne van a csomagban.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-1"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Hogyan fizethetek?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bankkártyával vagy online átutalással tudsz fizetni. Az első
              részletet a foglaláskor kell befizetni, a többit pedig később,
              amikor már közel van az utazás napja.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Mit tegyek ha lemondok?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Harminc nappal az indulás előtt ingyenesen lemondhatod az utazást.
              Később lemondás esetén a befizetett összeg egy részét visszakapod,
              attól függően, hogy mennyire van közel az indulás.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Mik a csomag részei?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Szállás, helyi közlekedés és néhány étkezés benne van. A
              repülőjegy külön, de segítünk az olcsó járatok megtalálásában, és
              az útmutatóban minden információ megvan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-border-primary px-5 md:px-6"
          >
            <AccordionTrigger
              icon={
                <RxPlus className="size-7 shrink-0 text-text-primary transition-transform duration-300 md:size-8" />
              }
              className="md:py-5 md:text-md [&[data-state=open]>svg]:rotate-45"
            >
              Egyedül utazhatok?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Persze, sokan utaznak egyedül. A csoportban azonnal barátokra
              találsz, és az első nap közös programunk van, hogy
              megismerkedjetek egymással.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Még több kérdésed van?
          </h4>
          <p className="md:text-md">Írj nekünk, szívesen válaszolunk.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Kapcsolat" variant="secondary">
              Kapcsolat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
