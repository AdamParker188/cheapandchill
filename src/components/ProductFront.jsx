"use client";
import { Button } from "@relume_io/relume-ui";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Range, getTrackBackground } from "react-range";
import { travelPackages } from '../data/travelPackages';

// --- SZÍNEK DEFINIÁLÁSA A CSÚSZKÁHOZ ---
const STEP_COLOR = '#007bff'; // A kék szín (aktív rész és a gomb)
const TRACK_COLOR = '#ccc';   // A szürke háttér szín

const parsePrice = (priceStr) => {
  if (!priceStr) return 0;
  if (typeof priceStr === 'number') return priceStr;
  const numericString = priceStr.replace(/\D/g, '');
  return parseInt(numericString, 10) || 0;
};

export function ProductFront() {
  const categories = useMemo(() => ["Összes", ...new Set(travelPackages.map(trip => trip.category))], []);

  const priceBounds = useMemo(() => {
      const prices = travelPackages.map(trip => parsePrice(trip.price));
      return {
          min: Math.min(...prices) || 0,
          max: Math.max(...prices) || 1000000,
      };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("Összes");
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);

  const filteredPackages = travelPackages.filter(trip => {
    const categoryMatch = selectedCategory === "Összes" || trip.category === selectedCategory;
    const priceMatch = parsePrice(trip.price) <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-16 text-center">
            <h4 className="font-semibold">Csomagok</h4>
            <h1 className="mt-3 text-5xl font-bold md:mt-4 md:text-7xl lg:text-8xl">Utazások</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* --- BAL OLDALI SÁV --- */}
          <aside className="w-full lg:w-1/4 lg:min-w-[250px] space-y-8">
            {/* KATEGÓRIA VÁLASZTÓ */}
            <div>
              <label htmlFor="category-select" className="block text-sm font-bold mb-2">
                Régió / Kategória
              </label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* ÁR CSÚSZKA */}
            <div>
               <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold">Max. ár</span>
                  <span className="text-primary font-bold">
                    {new Intl.NumberFormat('hu-HU').format(maxPrice)} Ft
                  </span>
              </div>

              <div className="px-2">
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

            <div className="text-sm text-gray-500">
                {filteredPackages.length} utazás elérhető
            </div>
          </aside>

          {/* --- JOBB OLDALI TARTALOM --- */}
          <div className="flex-1">
            {filteredPackages.length > 0 ? (
              // Itt maradt a justify-items-center az előző lépésből
              <div className="grid grid-cols-1 justify-items-center gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                {filteredPackages.map((trip) => (
                  // --- JAVÍTÁS: Hozzáadtam a 'max-w-sm' osztályt ---
                  // Ez korlátozza a kártya szélességét, így a justify-items-center már láthatóan középre fogja igazítani őket.
                  <div key={trip.id} className="w-full max-w-sm flex flex-col group">
                    <Link to={`/csomag/${trip.id}`} className="mb-3 block aspect-[5/6] md:mb-4 overflow-hidden rounded-md">
                      <img
                          src={trip.image}
                          alt={trip.title}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    <Link to={`/csomag/${trip.id}`} className="flex flex-col text-center md:text-md mb-4 ">
                      <div className="mb-2">
                        <h3 className="font-semibold text-xl">{trip.title}</h3>
                        <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">{trip.category}</div>
                        <div className="text-sm text-gray-500">{trip.duration}</div>
                      </div>
                      <div className="text-md font-bold md:text-lg">{trip.price}</div>
                    </Link>
                    <Link to={`/csomag/${trip.id}`} className="w-full mt-auto transition-transform hover:scale-105 ">
                      <Button variant="secondary" size="sm" title="Részletek" className="w-full">
                        Bővebben
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Nincs találat</h3>
                  <p className="text-gray-600">Próbálj meg más szűrési feltételeket beállítani.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}