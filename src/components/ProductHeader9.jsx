// src/components/ProductHeader9.jsx
"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Navbar6 } from "./Navbar6";
import { Footer3 } from "./Footer3";
import { Button } from "@relume_io/relume-ui";
import {
  BiSolidStar,
  BiSolidStarHalf,
  BiStar,
  BiMap,
  BiCalendar,
  BiSolidPlane,
  BiCheck,
} from "react-icons/bi";
import { parseISO, format, isValid } from "date-fns";
import { hu } from "date-fns/locale";

// ---------- HELPERS ----------
const formatRange = (startISO, endISO) => {
  if (!startISO || !endISO) return null;

  const s = parseISO(String(startISO));
  const e = parseISO(String(endISO));

  // SAFE: ha nem ISO (pl. 2/19/2026) vagy üres → ne omoljon össze
  if (!isValid(s) || !isValid(e)) return null;

  const sameMonth = s.getMonth() === e.getMonth();

  if (sameMonth) {
    // pl. Január 18 – 24
    return `${format(s, "LLLL d", { locale: hu })} – ${format(e, "d", {
      locale: hu,
    })}`;
  }

  // pl. Január 18 – Február 24
  return `${format(s, "LLLL d", { locale: hu })} – ${format(e, "LLLL d", {
    locale: hu,
  })}`;
};


const formatFt = (value) => {
  // támogatja: 70650, "70650", "70 650 Ft"
  if (typeof value === "number" && Number.isFinite(value)) {
    return new Intl.NumberFormat("hu-HU").format(value) + " Ft";
  }

  if (typeof value === "string") {
    const digits = value.replace(/[^\d]/g, "");
    if (digits) return new Intl.NumberFormat("hu-HU").format(Number(digits)) + " Ft";
  }

  return "";
};

// ---------- COMPONENT ----------
export function ProductHeader9({ trip }) {
  // A details page már kiválasztja a trip-et; itt csak renderelünk
  if (!trip) return null;

  const dateLabel = formatRange(trip.startDate, trip.endDate);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar6 />

      <main className="flex-grow px-[5%] py-8 md:py-12">
        <div className="container max-w-6xl">
          {/* FEJLÉC */}
          <div className="mb-8">
            <Link
              to="/csomagok"
              className="text-sm text-gray-500 hover:underline mb-4 block"
            >
              ← Vissza a csomagokhoz
            </Link>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">{trip.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-700">
              {dateLabel && (
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <BiCalendar className="text-primary" />
                  {dateLabel}
                </div>
              )}

              {trip.location && (
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <BiMap className="text-primary" />
                  {trip.location}
                </div>
              )}

            </div>
          </div>

          {/* FŐ KÉP */}
          {trip.image && (
            <div className="relative mb-10 rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[21/9]">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover"
              />

              {/* FELTÖLTÉS DÁTUMA */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md">
                Feltöltve: {trip.createdAt}
              </div>
            </div>

          )}


          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
            {/* --- BAL OSZLOP: LEÍRÁS + SZÁLLÁSOK --- */}
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-4">Az utazásról</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {trip.fullDescription || trip.description}
                </p>
              </section>

              {/* --- SZÁLLÁS KÁRTYÁK --- */}
              {trip.hotels?.recommended || trip.hotels?.budget ? (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Választható Szállások</h2>
                  <div className="grid grid-cols-1 gap-8">
                    {/* AJÁNLOTT */}
                    {trip.hotels?.recommended && (
                      <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-blue-50 px-6 py-2 border-b border-blue-100 flex justify-between items-center">
                          <span className="font-bold text-blue-800 uppercase text-xs tracking-wider">
                            🌟 Ajánlott Opció
                          </span>
                          {trip.hotels.recommended.priceLabel && (
                            <span className="text-base text-blue-600 font-semibold">
                              {trip.hotels.recommended.priceLabel}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="h-48 md:h-auto">
                            {trip.hotels.recommended.image && (
                              <img
                                src={trip.hotels.recommended.image}
                                className="w-full h-full object-cover"
                                alt={trip.hotels.recommended.name || "Hotel"}
                              />
                            )}
                          </div>

                          <div className="p-6 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-2">
                                {trip.hotels.recommended.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">
                                {trip.hotels.recommended.description}
                              </p>
                            </div>

                            {trip.hotels.recommended.url && (
                              <a
                                href={trip.hotels.recommended.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button className="w-full">Megnézem</Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* BUDGET */}
                    {trip.hotels?.budget && (
                      <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-50 px-6 py-2 border-b border-green-100 flex justify-between items-center">
                          <span className="font-bold text-green-800 uppercase text-xs tracking-wider">
                            💰 Pénztárcabarát Opció
                          </span>
                          {trip.hotels.budget.priceLabel && (
                            <span className="text-base text-green-600 font-semibold">
                              {trip.hotels.budget.priceLabel}
                            </span>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2">
                          <div className="h-48 md:h-auto">
                            {trip.hotels.budget.image && (
                              <img
                                src={trip.hotels.budget.image}
                                className="w-full h-full object-cover"
                                alt={trip.hotels.budget.name || "Szállás"}
                              />
                            )}
                          </div>

                          <div className="p-6 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-bold mb-2">
                                {trip.hotels.budget.name}
                              </h3>
                              <p className="text-gray-600 text-sm mb-4">
                                {trip.hotels.budget.description}
                              </p>
                            </div>

                            {trip.hotels.budget.url && (
                              <a
                                href={trip.hotels.budget.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  variant="secondary"
                                  className="w-full border-green-200 text-green-700 hover:bg-green-50"
                                >
                                  Megnézem
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              ) : null}
            </div>

            {/* --- JOBB OSZLOP: REPÜLŐJEGY (Sticky) --- */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="border shadow-lg rounded-xl p-6 bg-white border-t-4 border-t-primary">
                <p className="text-gray-500 text-sm mb-1">Becsült útiköltség / fő</p>
                <h3 className="text-4xl font-bold text-primary mb-6">
                  {formatFt(trip.price)}
                </h3>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">A szervezés menete:</h4>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex gap-2">
                      <BiCheck className="text-green-500 text-lg" />
                      1. Foglald le a repjegyet itt lent
                    </li>
                    <li className="flex gap-2">
                      <BiCheck className="text-green-500 text-lg" />
                      2. Válassz szállást a bal oldali listából
                    </li>
                    <li className="flex gap-2">
                      <BiCheck className="text-green-500 text-lg" />
                      3. Pakolj össze és érezd jól magad
                    </li>
                  </ul>
                </div>

                {trip.flightUrl ? (
                  <a
                    href={trip.flightUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full py-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                      <BiSolidPlane className="text-xl" /> Repülőjegy foglalása
                    </Button>
                  </a>
                ) : (
                  <div className="text-sm text-gray-500 text-center">
                    Ehhez az utazáshoz nincs megadva repülőjegy link.
                  </div>
                )}

                <p className="text-center text-xs text-gray-400 mt-4">
                  A gombra kattintva a légitársaság oldalára jutsz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer3 />
    </div>
  );
}
