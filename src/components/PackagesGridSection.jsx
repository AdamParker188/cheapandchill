// src/components/PackagesGridSection.jsx
import React, { useMemo, useState } from "react";
import { detailedTravelPackages } from "../data/detailedTravelPackages";
import { TravelCardVertical } from "./TravelCardVertical";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parseISO,differenceInCalendarDays,format } from "date-fns";


const DateRangeInput = React.forwardRef(function DateRangeInput(
  { value, onClick, label, nights, hasRange, onClear },
  ref
) {
  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      className="w-full text-left p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 transition"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm text-gray-500 truncate">{label}</div>
          <div className="font-semibold text-gray-900 truncate">{value || "Válassz időszakot..."}</div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {hasRange && (
            <span className="px-2.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold">
              {nights} éj
            </span>
          )}

          {hasRange && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClear?.();
              }}
              className="px-2 py-1 rounded-md text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              title="Törlés"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </button>
  );
});



const STEP = 1000;

const formatFt = (n) => new Intl.NumberFormat("hu-HU").format(n) + " Ft";

// Biztos ár-parsoló: kezeli, ha stringben van (pl. "70 650 Ft" vagy "70650")
const parsePriceToNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return NaN;

  // kiszedi: szóköz, Ft, bármi nem szám
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : NaN;
};

export function PackagesGridSection() {
  // --- ÁLLAPOTOK (STATES) A KERESÉSHEZ ---
  // maxPrice: null = nincs limit
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("Bárhova");

  // Dátumtartomány
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const nights =
    startDate && endDate ? Math.max(0, differenceInCalendarDays(endDate, startDate)) : 0;
  
  const rangeLabel =
    startDate && endDate
        ? `${format(startDate, "yyyy.MM.dd")} – ${format(endDate, "yyyy.MM.dd")}`
        : "Válassz időszakot...";



  // --- RÉGIÓK LISTÁJA ---
  const regions = useMemo(() => {
    return ["Bárhova", ...new Set(detailedTravelPackages.map((trip) => trip.location).filter(Boolean)),];
  }, []);

  // --- CSÚSZKA HATÁRAI (min/max) a csomagok áraiból ---
  const { minPossible, maxPossible } = useMemo(() => {
    const prices = detailedTravelPackages
      .map((p) => parsePriceToNumber(p.price))
      .filter((v) => Number.isFinite(v));

    // Biztonság: ha valamiért nincs ár
    if (prices.length === 0) {
      return { minPossible: 0, maxPossible: 300000 };
    }

    const min = Math.floor(Math.min(...prices) / STEP) * STEP;
    const max = Math.ceil(Math.max(...prices) / STEP) * STEP;

    return { minPossible: min, maxPossible: max };
  }, []);

  // --- FŐ SZŰRÉSI LOGIKA ---
  const filteredPackages = useMemo(() => {
    return detailedTravelPackages.filter((trip) => {
      const tripPrice = parsePriceToNumber(trip.price);

      // 1) Ár szűrés (csak MAX)
      const matchesPrice =
        maxPrice === null || !Number.isFinite(tripPrice) ? true : tripPrice <= maxPrice;

      // 2) Régió szűrés
      const matchesRegion = selectedRegion === "Bárhova" || trip.location === selectedRegion;

      // 3) Dátum szűrés
      let matchesDate = true;
      if (startDate && endDate) {
        const tripStart = parseISO(trip.startDate);
        const tripEnd = parseISO(trip.endDate);

        matchesDate =
          (tripStart >= startDate && tripStart <= endDate) ||
          (tripEnd >= startDate && tripEnd <= endDate) ||
          (tripStart <= startDate && tripEnd >= endDate);
      }

      return matchesPrice && matchesRegion && matchesDate;
    });
  }, [maxPrice, selectedRegion, startDate, endDate]);

  // Közös input stílus
  const inputClassName =
    "w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";

  // Slider kitöltés százalék (szebb csík)
  const sliderValue = maxPrice === null ? maxPossible : maxPrice;
  const sliderPct =
    maxPossible === minPossible
      ? 100
            : ((sliderValue - minPossible) / (maxPossible - minPossible)) * 100;

    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 lg:px-8">
                {/* --- FELSŐ KERESŐSÁV --- */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* 1) DÁTUM */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 uppercase mb-2">
                                Mikor utaznál?
                            </label>

                            <DatePicker
                                selectsRange
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(update) => setDateRange(update)}
                                isClearable={false}
                                dateFormat="yyyy.MM.dd"
                                monthsShown={2}
                                shouldCloseOnSelect={false}
                                customInput={
                                    <DateRangeInput
                                        label="Időszak"
                                        nights={nights}
                                        hasRange={Boolean(startDate && endDate)}
                                        onClear={() => setDateRange([null, null])}
                                    />
                                }
                                placeholderText="Válassz időszakot..."
                                showPopperArrow={false}
                            />

                            <div className="mt-2 text-sm text-gray-500">
                                {startDate && endDate ? (
                                    <span>
                                        {rangeLabel} •{" "}
                                        <span className="font-semibold text-gray-700">
                                            {nights} éjszaka
                                        </span>
                                    </span>
                                ) : (
                                    <span>Válassz egy kezdő- és egy záródátumot.</span>
                                )}
                            </div>
                        </div>

                        {/* 2) RÉGIÓ */}
                        <div>
                            <label
                                htmlFor="region-select"
                                className="block text-sm font-bold text-gray-700 uppercase mb-2"
                            >
                                Hova?
                            </label>

                            <select
                                id="region-select"
                                value={selectedRegion}
                                onChange={(e) => setSelectedRegion(e.target.value)}
                                className={inputClassName}
                            >
                                {regions.map((region, index) => (
                                    <option key={index} value={region}>
                                        {region}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* 3) MAX ÁR (csúszka) */}
                        <div>
                            <div className="flex items-end justify-between mb-2">
                                <label className="block text-sm font-bold text-gray-700 uppercase">
                                    Max ár
                                </label>

                                <button
                                    type="button"
                                    onClick={() => setMaxPrice(null)}
                                    className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                                    title="Árkorlát kikapcsolása"
                                >
                                    Nincs limit
                                </button>
                            </div>

                            <div className="rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="text-sm text-gray-500">{formatFt(minPossible)}</div>

                                    <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold">
                                        {maxPrice === null ? "∞" : formatFt(maxPrice)}
                                    </div>

                                    <div className="text-sm text-gray-500">{formatFt(maxPossible)}</div>
                                </div>

                                <input
                                    type="range"
                                    min={minPossible}
                                    max={maxPossible}
                                    step={STEP}
                                    value={sliderValue}
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full h-2 appearance-none rounded-full outline-none"
                                    style={{
                                        background: `linear-gradient(to right, #2563EB ${sliderPct}%, #E5E7EB ${sliderPct}%)`,
                                    }}
                                    aria-label="Maximális ár"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- EREDMÉNYEK --- */}
                <div>
                    {filteredPackages.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {filteredPackages.map((trip) => (
                                <TravelCardVertical key={trip.id} trip={trip} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                Nincs találat a megadott feltételekre.
                            </h3>
                            <p className="text-gray-500">
                                Próbálj meg tágabb időszakot vagy másik régiót választani.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
