// src/components/PackagesGridSection.jsx
import React, { useState, useMemo } from 'react';
import { detailedTravelPackages } from '../data/detailedTravelPackages';
import { TravelCardVertical } from './TravelCardVertical';
// Importáljuk a naptárat és a dátumkezelő függvényeket
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isWithinInterval, parseISO } from 'date-fns';

export function PackagesGridSection() {
  // --- ÁLLAPOTOK (STATES) A KERESÉSHEZ ---
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Bárhova");
  // A naptár által kiválasztott dátumtartomány (kezdet és vég)
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // --- RÉGIÓK LISTÁJÁNAK ÖSSZEÁLLÍTÁSA ---
  const regions = useMemo(() => {
    return ["Bárhova", ...new Set(detailedTravelPackages.map(trip => trip.region))];
  }, []);


  // --- FŐ SZŰRÉSI LOGIKA ---
  const filteredPackages = detailedTravelPackages.filter(trip => {
    // 1. Szöveges keresés (címben)
    const matchesSearch = trip.title.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Régió szűrés
    const matchesRegion = selectedRegion === "Bárhova" || trip.region === selectedRegion;

    // 3. Dátum szűrés (A legtrükkösebb rész!)
    let matchesDate = true;
    // Csak akkor szűrünk dátumra, ha mind a kezdő, mind a végdátum ki van választva a naptárban
    if (startDate && endDate) {
        // Átalakítjuk az adatbázisban lévő string dátumokat valódi Date objektummá
        const tripStart = parseISO(trip.startDate);
        const tripEnd = parseISO(trip.endDate);

        // Megnézzük, hogy az utazás bármelyik napja beleesik-e a keresett időszakba
        // (Ez egy egyszerűsített logika, de jól működik a legtöbb esetben)
        matchesDate =
            (tripStart >= startDate && tripStart <= endDate) || // Az utazás kezdete a keresett időszakban van
            (tripEnd >= startDate && tripEnd <= endDate) ||     // VAGY az utazás vége a keresett időszakban van
            (tripStart <= startDate && tripEnd >= endDate);     // VAGY az utazás teljesen lefedi a keresett időszakot
    }

    // Akkor jelenítjük meg, ha MINDEN feltétel igaz
    return matchesSearch && matchesRegion && matchesDate;
  });


  // Segédfüggvény a beviteli mezők stílusához (hogy egyformák legyenek)
  const inputClassName = "w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 lg:px-8">

        {/* --- FELSŐ KERESŐSÁV --- */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. DÁTUM VÁLASZTÓ (DatePicker) */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 uppercase mb-2">Mikor utaznál?</label>
                    <DatePicker
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => setDateRange(update)}
                        isClearable={true}
                        placeholderText="Válassz időszakot..."
                        className={inputClassName} // A közös stílus alkalmazása
                        dateFormat="yyyy/MM/dd"
                    />
                </div>

                {/* 2. RÉGIÓ VÁLASZTÓ (Select) */}
                <div>
                    <label htmlFor="region-select" className="block text-sm font-bold text-gray-700 uppercase mb-2">Hova?</label>
                    <select
                        id="region-select"
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className={inputClassName} // A közös stílus alkalmazása
                    >
                        {regions.map((region, index) => (
                            <option key={index} value={region}>{region}</option>
                        ))}
                    </select>
                </div>

                {/* 3. SZÖVEGES KERESŐ (Input) */}
                <div>
                    <label htmlFor="text-search" className="block text-sm font-bold text-gray-700 uppercase mb-2">Keresés szövegben</label>
                    <input
                        type="text"
                        id="text-search"
                        placeholder="Pl.: Miami"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={inputClassName} // A közös stílus alkalmazása
                    />
                </div>
            </div>
        </div>


        {/* --- ALSÓ RÁCS (GRID) AZ EREDMÉNYEKKEL --- */}
        <div>
            {filteredPackages.length > 0 ? (
                // 3 oszlopos rács, nagy hézagokkal
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredPackages.map((trip) => (
                        // Itt használjuk az új álló kártyát
                        <TravelCardVertical key={trip.id} trip={trip} />
                    ))}
                </div>
            ) : (
                // Ha nincs találat
                <div className="text-center py-16 bg-gray-50 rounded-xl">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Nincs találat a megadott feltételekre.</h3>
                    <p className="text-gray-500">Próbálj meg tágabb időszakot vagy másik régiót választani.</p>
                </div>
            )}
        </div>

      </div>
    </section>
  );
}