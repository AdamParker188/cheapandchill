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
            GYIK
          </h2>
          <p className="md:text-md">
            Válaszok azokra a kérdésekre, amelyek minden fiatal utazót
            érdekelnek.
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
              Hogyan foglalhatok egy csomagot?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Válassz egy úti célt az oldalon, nézd meg a részleteket, majd
              kattints a foglalás gombra. Kitöltesz egy rövid formot, és kész.
              Egyszerű, mint az élet.
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
              Milyen fizetési módok érhetők el?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Bankkártyát, PayPalt és átutalást fogadunk el. Válaszd azt, amely
              számodra legkönnyebb. Nincs semmi bonyolult.
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
              Lehet-e lemondani vagy módosítani?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Igen, de időben kell. Két héttel az utazás előtt még módosítható
              vagy lemondható. Utána már nem, mert már foglaltunk helyeket.
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
              Mit kell magammal vinni?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Útlevél, biztosítás, némi pénz és egy nyitott szív. A részletes
              csomaglistát e-mailben küldöm, amikor megerősítjük a foglalást.
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
              Egyedül utazhatok vagy csak csoportban?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Mindkettő lehetséges. Egyedül is jó, csoportban még jobb. Az
              utazások során úgyis összebarátkozol az emberekkel.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Még kérdéseid vannak?
          </h4>
          <p className="md:text-md">Írj nekem, szívesen válaszolok bármire.</p>
          <div className="mt-6 md:mt-8">
            <Button title="Kapcsolatfelvétel" variant="secondary">
              Kapcsolatfelvétel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
