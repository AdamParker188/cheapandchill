"use client";
import { Button } from "@relume_io/relume-ui";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { parseISO, isValid, format } from "date-fns";
import { hu } from "date-fns/locale";

// --- SAFE PARSING ---
const safeParseISO = (value) => {
  if (!value) return null;
  if (value instanceof Date) return isValid(value) ? value : null;
  if (typeof value === "string") {
    // csak ISO-ra optimalizált (YYYY-MM-DD)
    const d = parseISO(value);
    return isValid(d) ? d : null;
  }
  return null;
};

const formatDateRangeHuSafe = (startStr, endStr) => {
  const start = safeParseISO(startStr);
  const end = safeParseISO(endStr);

  if (!start || !end) return ""; // ne írjunk semmit, ha hibás

  const sameMonth = start.getMonth() === end.getMonth();

  if (sameMonth) {
    // Január 18 – 24
    return `${format(start, "LLLL d", { locale: hu })} – ${format(end, "d", {
      locale: hu,
    })}`;
  }

  // Január 18 – Február 24
  return `${format(start, "LLLL d", { locale: hu })} – ${format(end, "LLLL d", {
    locale: hu,
  })}`;
};

const parsePriceToNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const digits = value.replace(/[^\d]/g, "");
    return digits ? Number(digits) : NaN;
  }
  return NaN;
};

export function Product10({ packages = [] }) {
  const displayedTrips = useMemo(() => {
    const list = Array.isArray(packages) ? packages : [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const withDates = list.map((trip) => {
      const startObj = safeParseISO(trip.startDate);
      return { ...trip, _startDateObj: startObj };
    });

    // Jövőbeli, legközelebbi startDate szerint
    const upcoming = withDates
      .filter((t) => t._startDateObj && t._startDateObj >= today)
      .sort((a, b) => a._startDateObj - b._startDateObj);

    // Fallback: múltbeli / dátum nélküli a végére
    const fallback = withDates
      .filter((t) => !t._startDateObj || t._startDateObj < today)
      .sort((a, b) => {
        const aTime = a._startDateObj ? a._startDateObj.getTime() : Infinity;
        const bTime = b._startDateObj ? b._startDateObj.getTime() : Infinity;
        return aTime - bTime;
      });

    return [...upcoming, ...fallback].slice(0, 3);
  }, [packages]);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* FEJLÉC */}
        <div className="mb-12 text-center">
          <h4 className="font-semibold lg:text-2xl">Last Minute</h4>
          <h1 className="mt-3 text-5xl font-bold md:text-7xl lg:text-8xl">
            Utazások
          </h1>
        </div>

        {/* KÁRTYÁK */}
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {displayedTrips.map((trip) => {
            const priceNum = parsePriceToNumber(trip.price);
            const priceLabel = Number.isFinite(priceNum)
              ? `${priceNum.toLocaleString("hu-HU")} Ft`
              : String(trip.price ?? "");

            const dateLabel = formatDateRangeHuSafe(trip.startDate, trip.endDate);

            return (
              <div
                key={trip.id}
                className="group w-full flex flex-col items-center"
              >
                {/* KÉP */}
                <Link to={`/csomag/${trip.id}`} className="w-full">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </Link>

                {/* SZÖVEG */}
                <div className="mt-3 text-center px-2">
                  <h3 className="text-base font-semibold leading-tight mb-1">
                    {trip.title}
                  </h3>

                  {dateLabel && (
                    <div className="text-base font-semibold text-gray-800 mb-1">
                      {dateLabel}
                    </div>
                  )}

                  <div className="text-base font-bold">{priceLabel}</div>
                </div>

                {/* GOMB */}
                <Link to={`/csomag/${trip.id}`} className="w-full mt-3 px-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  >
                    Bővebben
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* ALSÓ GOMB */}
        <div className="mt-16 flex justify-center">
          <Link to="/csomagok">
            <Button
              variant="secondary"
              size="sm"
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
