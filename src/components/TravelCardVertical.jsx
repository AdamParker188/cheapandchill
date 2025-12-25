// src/components/TravelCardVertical.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from "date-fns";
import { hu } from "date-fns/locale";

const formatDateRangeHu = (startISO, endISO) => {
  if (!startISO || !endISO) return null;

  const start = parseISO(startISO);
  const end = parseISO(endISO);

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



export function TravelCardVertical({ trip }) {
  // Ár formázása (pl. 70 650 Ft)
  const formattedPrice = new Intl.NumberFormat('hu-HU').format(trip.price);

  return (
    <div className="flex flex-col h-full group">
      {/* KÉP LINK - Kerekített sarkok, hover effekt */}
      <Link to={`/csomag/${trip.id}`}state={{trip}} className="block overflow-hidden rounded-lg aspect-[4/3] mb-4">
        <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      {/* TARTALOM - Középre igazítva */}
      <div className="text-center flex-grow flex flex-col px-2">
        {/* Cím */}
              <Link to={`/csomag/${trip.id}`}state={{trip}} className="block">
                  <h3 className="text-lg font-medium text-gray-800 leading-tight mb-1 hover:text-blue-600 transition-colors">
                      {trip.title}
                  </h3>

                  {trip.startDate && trip.endDate && (
                      <div className="mt-2 text-base font-semibold text-gray-700">
                          {formatDateRangeHu(trip.startDate, trip.endDate)}
                      </div>
                  )}
              </Link>


        {/* Alsó szekció: Ár, Régió, Dátum */}
        <div className="mt-auto">
            {/* Ár - Piros, nagy betűvel */}
        <div className="mt-4 text-pink-600 font-bold text-lg">
            {new Intl.NumberFormat("hu-HU").format(trip.price)} Ft
        </div>
            {/* Régió - Nagybetűs, félkövér */}
            <div className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-1">
                {trip.region}
            </div>
            {/* Dátum - Szürke */}
            <div className="text-sm text-gray-500 uppercase">
                {trip.dateDisplay}
            </div>
        </div>
      </div>
    </div>
  );
}