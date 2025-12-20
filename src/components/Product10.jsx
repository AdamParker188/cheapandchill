"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
import { travelPackages } from '../data/travelPackages'; 

export function Product10() {
  // (Opcionális: ha csak az első 3 vagy 6 utazást akarod itt mutatni a főoldalon)
  // const displayedTrips = travelPackages.slice(0, 6); 
  // És lent a map-nél: displayedTrips.map(...)

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* FEJLÉC */}
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Csomagok</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">Utazások</h1>
          </div>
        </div>

        {/* UTAZÁS KÁRTYÁK RÁCSA */}
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {travelPackages.map((trip) => (
            <div key={trip.id} className="w-full flex flex-col">
              {/* KÉP LINK */}
              <Link to={`/csomag/${trip.id}`} className="mb-3 block aspect-[5/6] md:mb-4">
                <img src={trip.image} alt={trip.title} className="size-full object-cover rounded-md" />
              </Link>

              {/* CÍM LINK */}
              <Link to={`/csomag/${trip.id}`} className="flex flex-col text-center md:text-md mb-4 ">
                <div className="mb-2">
                  <h3 className="font-semibold text-xl">{trip.title}</h3>
                  <div className="text-sm text-gray-500">{trip.duration}</div>
                </div>
                <div className="text-md font-bold md:text-lg">{trip.price}</div>
              </Link>

              {/* BŐVEBBEN GOMB */}
              <Link to={`/csomag/${trip.id}`} className="w-full mt-auto ansition-form hover:scale-110 ">
                 <Button variant="secondary" size="sm" title="Részletek" className="w-full">
                   Bővebben
                 </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* --- EZ AZ ÚJ RÉSZ: ÖSSZES UTAZÁS GOMB (Javított stílussal) --- */}
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
          <Link to="/package">
            <Button
              variant="secondary" // Ez adja a fehér hátteret és fekete keretet (mint a többi gombnál)
              size="sm"           // Ez adja a kisebb méretet (mint a többi gombnál)
              title="Összes utazás megtekintése"
              // Hozzáadtam egy kis extra szélességet (px-8) és vastagabb betűtípust (font-semibold),
              // hogy jobban mutasson önálló gombként.
              className="px-8 py-3 font-semibold transition-form hover:scale-110"
            >
              Összes utazás
            </Button>
          </Link>
        </div>
{/* --- ÚJ RÉSZ VÉGE --- */}

      </div>
    </section>
  );
}