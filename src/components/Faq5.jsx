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
              Gyakorlatilag két gondosan kiválasztott szálláslehetőséget ajánlok a számos elérhető opció közül. 
              Az egyik egy magasabb színvonalú, jellemzően hotelszobai elhelyezés, míg a másik inkább a költséghatékonyságot szem előtt tartó, hostel jellegű szállás.
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
              Hogyan történik a foglalás és a fizetés?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A weboldalon található szállás- és repülőjegy-linkek egy összesítő oldalra, a Skyscannerre vezetnek, ahol egyszerűen és gyorsan meg tudod nézni az elérhető lehetőségeket, összehasonlíthatod az árakat, majd közvetlenül lefoglalhatod az utazáshoz szükséges szállást és repülőjegyet.
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
              Megbízható ez?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A Skyscanner a világ egyik legnépszerűbb utazásfoglaló oldala, amely teljesen biztonságos. Én nem kérek és nem kezelek semmilyen személyes adatot: a foglalás minden lépését közvetlenül a Skyscanner felületén végzed el. Az én feladatom csupán az, hogy megmutassam, mikor és hol a legésszerűbb lefoglalni az utazást.
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
              A weboldalamon található csomagban a két fő komponense van az utazásodnak , azaz a repülőjegy és a szállás.
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
              Persze, sokan utaznak egyedül.Azonban a szállások nagyrésze 2 főre vannak kalkulálva, tehát az egyedüli utazások bizonyos esetekben megdobhatják a költségeket.
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
              Miért nem azt az árat látom már a foglalásnál amit a weboldalon látok?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              A repülőjegyek árazása egy rendkívűl ingadozó, dinamikus dolog. Minden csomagnál feltüntetem a feltöltés dátumát, minél korábban észreveszed annál nagyobb a valószínűsége,hogy még azonos árral letudod foglalni az utat.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Még több kérdésed van?
          </h4>
          <p className="md:text-md">Írj nekünk, szívesen válaszolunk.</p>
        </div>
      </div>
    </section>
  );
}
