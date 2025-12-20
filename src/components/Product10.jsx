"use client";
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
import { travelPackages } from '../data/travelPackages'; 

export function Product10() {
  // --- ÚJ SOR: Csak az első 3 csomagot vesszük ki a teljes listából ---
  // A .slice(0, 3) a 0. indextől a 3. indexig (azt már nem beleértve) vág.
  const displayedTrips = travelPackages.slice(0, 3); 

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold">Csomagok</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">Utazások</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {/* --- MÓDOSÍTÁS: Itt most már a 'displayedTrips' tömböt járjuk be a 'travelPackages' helyett --- */}
          {displayedTrips.map((trip) => (
            <div key={trip.id} className="group w-full flex flex-col">
              {/* KÉP LINK */}
              <Link to={`/csomag/${trip.id}`} className="mb-3 block aspect-[5/6] md:mb-4">
                <img src={trip.image} alt={trip.title} className="size-full object-cover rounded-md" />
              </Link>

              {/* CÍM LINK */}
              <Link to={`/csomag/${trip.id}`} className="flex flex-col text-center md:text-md mb-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-xl">{trip.title}</h3>
                  <div className="text-sm text-gray-500">{trip.duration}</div>
                </div>
                <div className="text-md font-bold md:text-lg">{trip.price}</div>
              </Link>

              {/* GOMB - Ez visz a részletekhez */}
              <Link to={`/csomag/${trip.id}`} className="w-full mt-auto">
                  <Button
                    variant="secondary"
                    size="sm"
                    title="Részletek"
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  >
                    Bővebben
                  </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* ALSÓ GOMB */}
        <div className="mt-12 flex justify-center md:mt-18 lg:mt-20">
           {/* FONTOS: A 'to="/csomagok"' részt ellenőrizd, hogy a te oldaladon is így hívják-e az összesítőt! */}
           <Link to="/csomagok">
             <Button
               variant="secondary"
               size="sm"
               title="Mutasd a többit"
               className="px-8 py-3 font-semibold transition-transform hover:scale-105"
             >
               {/* --- MÓDOSÍTÁS: A gomb szövege átírva --- */}
               Mutasd a többit
             </Button>
           </Link>
        </div>

      </div>
    </section>
  );
}