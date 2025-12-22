// src/pages/package/index.jsx
import React from "react";
import { Navbar6 } from "../../components/Navbar6";
import { Footer3 } from "../../components/Footer3";
import { PackagesGridSection } from "../../components/PackagesGridSection";
import { usePackages } from "../../context/PackagesContext";

export default function PackagesPage() {
  const { packages, loading, error } = usePackages();

  return (
    <>
      <Navbar6 />

      {loading ? (
        <div className="py-24 text-center text-gray-500">Betöltés…</div>
      ) : error ? (
        <div className="py-24 text-center">
          <div className="text-red-600 font-semibold">Nem sikerült betölteni a csomagokat</div>
          <div className="text-gray-600 text-sm mt-2">{error}</div>
        </div>
      ) : (
        <PackagesGridSection packages={packages} />
      )}

      <Footer3 />
    </>
  );
}
