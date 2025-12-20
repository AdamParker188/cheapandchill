// src/components/PackagesGridSection.jsx
import React, { useMemo, useState } from "react";
import { detailedTravelPackages } from "../data/detailedTravelPackages";
import { TravelCardVertical } from "./TravelCardVertical";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  parseISO,
  isValid,
  startOfDay,
  endOfDay,
} from "date-fns";

const STEP = 1000;

const formatFt = (n) => new Intl.NumberFormat("hu-HU").format(n) + " Ft";

// Biztos ár-parsoló: kezeli, ha stringben van (pl. "70 650 Ft" vagy "70650")
const parsePriceToNumber = (value) => {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return NaN;
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number(digits) : NaN;
};

export function PackagesGridSection() {
  // --- STATES ---
  const [maxPrice, setMaxPrice] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState("Bárhova");

  // Date range: két mező
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // --- RÉGIÓK / ORSZÁGOK LISTÁJA (location alapján) ---
  const regions = useMemo(() => {
    const values = (Array.isArray(detailedTravelPackages) ? detailedTravelPackages : [])
      .map((trip) => trip.location)
      .filter(Boolean);

    return ["Bárhova", ...new Set(values)];
  }, []);

  // --- SLIDER HATÁROK ---
  const { minPossible, maxPossible } = useMemo(() => {
    const data = Array.isArray(detailedTravelPackages) ? detailedTravelPackages : [];
    const prices = data
      .map((p) => parsePriceToNumber(p.price))
      .filter((v) => Number.isFinite(v));

    if (prices.length === 0) return { minPossible: 0, maxPossible: 300000 };

    const min = Math.floor(Math.min(...prices) / STEP) * STEP;
    const max = Math.ceil(Math.max(...prices) / STEP) * STEP;
    return { minPossible: min, maxPossible: max };
  }, []);

  // --- FILTER ---
  const filteredPackages = useMemo(() => {
    const data = Array.isArray(detailedTravelPackages) ? detailedTravelPackages : [];

    return data.filter((trip) => {
      // 1) Ár (max)
      const tripPrice = parsePriceToNumber(trip.price);
      const matchesPrice =
        maxPrice === null || !Number.isFinite(tripPrice) ? true : tripPrice <= maxPrice;

      // 2) Ország (location)
      const matchesRegion =
        selectedRegion === "Bárhova" || trip.location === selectedRegion;

      // 3) Dátum: intelligens (1 dátum / 2 dátum eset)
      let matchesDate = true;

      const tripStartRaw = parseISO(trip.startDate);
      const tripEndRaw = parseISO(trip.endDate);

      // Ha a csomagnál nincs normális dátum, ne zárjuk ki
      const tripHasValidDates = isValid(tripStartRaw) && isValid(tripEndRaw);

      if (tripHasValidDates) {
        const tripStart = startOfDay(tripStartRaw);
        const tripEnd = endOfDay(tripEndRaw);

        if (startDate && !endDate) {
          // csak kezdő: legyen átfedés a kezdő naptól
          const selectedStart = startOfDay(startDate);
          matchesDate = tripEnd >= selectedStart;
        } else if (!startDate && endDate) {
          // csak vég: legyen átfedés a vég napig
          const selectedEnd = endOfDay(endDate);
          matchesDate = tripStart <= selectedEnd;
        } else if (startDate && endDate) {
          // mindkettő: átfedés
          const selectedStart = startOfDay(startDate);
          const selectedEnd = endOfDay(endDate);
          matchesDate = tripStart <= selectedEnd && tripEnd >= selectedStart;
        } else {
          // nincs kijelölve dátum
          matchesDate = true;
        }
      } else {
        // hibás/hiányzó trip dátumnál: ne zárjuk ki
        matchesDate = true;
      }

      return matchesPrice && matchesRegion && matchesDate;
    });
  }, [maxPrice, selectedRegion, startDate, endDate]);

  // --- UI HELPERS ---
  const inputClassName =
    "w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white";

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
            {/* 1) DÁTUM (2 mező) */}
            <div>
              <label className="block text-sm font-bold text-gray-700 uppercase mb-2">
                Mikor utaznál?
              </label>

              <div className="grid grid-cols-2 gap-3">
                <DatePicker
                  selected={startDate}
                  onChange={(d) => {
                    setStartDate(d);
                    if (endDate && d && endDate < d) setEndDate(null);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Kezdő"
                  className={inputClassName}
                  dateFormat="yyyy.MM.dd"
                  monthsShown={2}
                  showPopperArrow={false}
                />

                <DatePicker
                  selected={endDate}
                  onChange={(d) => setEndDate(d)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Vége"
                  className={inputClassName}
                  dateFormat="yyyy.MM.dd"
                  monthsShown={2}
                  showPopperArrow={false}
                  disabled={!startDate}
                />
              </div>

              <div className="mt-2 text-sm text-gray-500">
                {!startDate ? (
                  <span>Először válassz kezdő dátumot.</span>
                ) : !endDate ? (
                  <span>Most válassz záró dátumot.</span>
                ) : (
                  <span>Időszak kiválasztva ✅</span>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setStartDate(null);
                  setEndDate(null);
                }}
                className="mt-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
              >
                Törlés
              </button>
            </div>

            {/* 2) ORSZÁG */}
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
                Próbálj meg tágabb időszakot vagy másik országot választani.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
