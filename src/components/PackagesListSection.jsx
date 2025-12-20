// src/components/PackagesListSection.jsx
import React, { useState, useMemo } from 'react';
import { detailedTravelPackages } from '../data/detailedTravelPackages';
import { TravelCardHorizontal } from './TravelCardHorizontal';
// Importáljuk a csúszkához szükséges dolgokat
import { Range, getTrackBackground } from "react-range";

// --- SZÍNEK DEFINIÁLÁSA A CSÚSZKÁHOZ ---
const STEP_COLOR = '#007bff'; // A kék szín (aktív rész és a gomb)
const TRACK_COLOR = '#ccc';   // A szürke háttér szín

// --- SEGÉDFÜGGVÉNY AZ ÁRAKHOZ ---
const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  return 0;
};

export function PackagesListSection() {
  // 1. ÁRAK MIN/MAX MEGHATÁROZÁSA A CSÚSZKÁHOZ
  const priceBounds = useMemo(() => {
      const prices = detailedTravelPackages.map(trip => parsePrice(trip.price));
      return {
          min: Math.min(...prices) || 0,
          max: Math.max(...prices) || 1000000, // Ha üres a lista, legyen egy alap max érték
      };
  }, []);

  // 2. ÁLLAPOT: Kezdetben a csúszka a legmagasabb áron áll
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);

  // 3. SZŰRÉSI LOGIKA: Csak az ár alapján szűrünk
  const filteredPackages = detailedTravelPackages.filter(trip => {
    return parsePrice(trip.price) <= maxPrice;
  });

  const resultCount = filteredPackages.length;

  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-[5%]">
        {/* FŐ CÍM */}
        <h1 className="text-3xl font-bold mb-6">Repülő+Hotel - válassza ki az útját</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- BAL OLDALSÁV (CSAK A CSÚSZKA MARADT) --- */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-bold mb-6">Szűrés ár szerint</h2>

                {/* ÁR CSÚSZKA (RANGE SLIDER) */}
                <div>
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold">Max. ár</span>
                      {/* Megmutatjuk a kiválasztott értéket formázva */}
                      <span className="text-blue-600 font-bold">
                        {new Intl.NumberFormat('hu-HU').format(maxPrice)} Ft
                      </span>
                  </div>

                  <div className="px-2 py-2">
                    <Range
                      values={[maxPrice]}
                      step={5000}
                      min={priceBounds.min}
                      max={priceBounds.max}
                      onChange={(values) => setMaxPrice(values[0])}
                      renderTrack={({ props, children }) => (
                        <div
                          onMouseDown={props.onMouseDown}
                          onTouchStart={props.onTouchStart}
                          style={{
                            ...props.style,
                            height: '36px',
                            display: 'flex',
                            width: '100%'
                          }}
                        >
                          <div
                            ref={props.ref}
                            style={{
                              height: '6px',
                              width: '100%',
                              borderRadius: '4px',
                              background: getTrackBackground({
                                values: [maxPrice],
                                colors: [STEP_COLOR, TRACK_COLOR],
                                min: priceBounds.min,
                                max: priceBounds.max
                              }),
                              alignSelf: 'center'
                            }}
                          >
                            {children}
                          </div>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => (
                        <div
                          {...props}
                          style={{
                            ...props.style,
                            height: '24px',
                            width: '24px',
                            borderRadius: '50%',
                            backgroundColor: STEP_COLOR,
                            border: '3px solid white',
                            boxShadow: '0px 2px 6px #AAA',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            outline: 'none'
                          }}
                        />
                      )}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
                      <span>{new Intl.NumberFormat('hu-HU').format(priceBounds.min)} Ft</span>
                      <span>{new Intl.NumberFormat('hu-HU').format(priceBounds.max)} Ft</span>
                  </div>
                </div>
            </div>
          </aside>

          {/* --- JOBB OLDALI TARTALOM (SZŰRT LISTA) --- */}
          <main className="flex-1">
            {/* Fejléc a lista felett */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
                <p className="font-semibold mb-4 md:mb-0">{resultCount} szállást találtunk</p>
                <select className="form-select border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500 font-semibold">
                    <option>Rendezés: Ár (növekvő)</option>
                </select>
            </div>

            {/* A Kártyák Listája (A SZŰRT LISTÁT HASZNÁLJUK) */}
            <div className="space-y-6">
                {filteredPackages.length > 0 ? (
                    filteredPackages.map((trip) => (
                        <TravelCardHorizontal key={trip.id} trip={trip} />
                    ))
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-700">Nincs találat a megadott ár alatt.</h3>
                        <p className="text-gray-500 mt-2">Próbáld meg növelni a maximális árat.</p>
                    </div>
                )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}