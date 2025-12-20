"use client";
import { Button } from "@relume_io/relume-ui";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { detailedTravelPackages } from "../data/detailedTravelPackages";
import { parseISO, isValid, format } from "date-fns";
import { hu } from "date-fns/locale";

const parseStartDate = (value) => {
  if (!value) return null;

  // ha Date objektum
  if (value instanceof Date) return isValid(value) ? value : null;

  // ha string (pl. "2025-12-15")
  if (typeof value === "string") {
    const d = parseISO(value);
    return isValid(d) ? d : null;
  }

  return null;
};
const formatDateRangeHu = (start, end) => {
  if (!start || !end) return "—";

  const sameMonth = start.getMonth() === end.getMonth();

  if (sameMonth) {
    // pl. Január 18 – 24
    return `${format(start, "LLLL d", { locale: hu })} – ${format(end, "d")}`;
  }

  // pl. Január 18 – Február 24
  return `${format(start, "LLLL d", { locale: hu })} – ${format(end, "LLLL d", {
    locale: hu,
  })}`;
};


const formatHuDate = (d) => (d ? format(d, "yyyy.MM.dd") : "—");

export function Product10() {
  const displayedTrips = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // feldolgozás dátummal
    const withDates = detailedTravelPackages.map((trip) => {
      const d = parseStartDate(trip.startDate);
      return { ...trip, _startDateObj: d };
    });

    // jövőbeli utak (ma vagy később)
    const upcoming = withDates
      .filter((t) => t._startDateObj && t._startDateObj >= today)
      .sort((a, b) => a._startDateObj - b._startDateObj);

    // ha nincs elég jövőbeli, jöhet a többi (múltbeli / dátum nélküli) – legközelebbi szerint
    const fallback = withDates
      .filter((t) => !t._startDateObj || t._startDateObj < today)
      .sort((a, b) => {
        const aTime = a._startDateObj ? a._startDateObj.getTime() : Number.POSITIVE_INFINITY;
        const bTime = b._startDateObj ? b._startDateObj.getTime() : Number.POSITIVE_INFINITY;
        return aTime - bTime;
      });

    return [...upcoming, ...fallback].slice(0, 3);
  }, []);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <h4 className="font-semibold lg:text-2xl">Last Minute</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">
              Utazások
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {displayedTrips.map((trip) => (
            <div key={trip.id} className="group w-full flex flex-col">
              {/* KÉP LINK */}
              <Link to={`/csomag/${trip.id}`} className="mb-3 block aspect-[5/6] md:mb-4">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="size-full object-cover rounded-md"
                />
              </Link>

              {/* CÍM + INFÓ */}
              <Link to={`/csomag/${trip.id}`} className="flex flex-col text-center md:text-md mb-4">
                <div className="mb-2">
                  <h3 className="font-semibold text-xl">{trip.title}</h3>

                  {/* eddigi duration */}
                  <div className="text-sm text-gray-500">{trip.duration ?? ""}</div>

                  {/* ÚJ: kezdő dátum */}
                  <div className="text-sm text-gray-500">
                    {formatDateRangeHu(trip._startDateObj, parseISO(trip.endDate))}
                  </div>
                </div>

                <div className="text-md font-bold md:text-lg">{trip.price}</div>
              </Link>

              {/* GOMB */}
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
          <Link to="/csomagok">
            <Button
              variant="secondary"
              size="sm"
              title="Mutasd a többit"
              className="px-8 py-3 font-semibold transition-transform hover:scale-105"
            >
              Mutasd a többit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
