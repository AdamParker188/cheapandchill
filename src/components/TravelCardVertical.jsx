// src/components/TravelCardVertical.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function TravelCardVertical({ trip }) {
  // Ár formázása (pl. 70 650 Ft)
  const formattedPrice = new Intl.NumberFormat('hu-HU').format(trip.price);

  return (
    <div className="flex flex-col h-full group">
      {/* KÉP LINK - Kerekített sarkok, hover effekt */}
      <Link to={`/csomag/${trip.id}`} className="block overflow-hidden rounded-lg aspect-[4/3] mb-4">
        <img
            src={trip.image}
            alt={trip.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      {/* TARTALOM - Középre igazítva */}
      <div className="text-center flex-grow flex flex-col justify-between px-2">
        {/* Cím */}
        <Link to={`/csomag/${trip.id}`} className="block">
            <h3 className="text-lg font-medium text-gray-800 leading-tight mb-4 hover:text-blue-600 transition-colors">
            {trip.title}
            </h3>
        </Link>

        {/* Alsó szekció: Ár, Régió, Dátum */}
        <div className="mt-auto">
            {/* Ár - Piros, nagy betűvel */}
            <div className="text-xl md:text-2xl font-bold text-[#D11163] mb-1">
                {formattedPrice} Ft
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