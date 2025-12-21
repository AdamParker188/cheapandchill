// src/pages/package/index.jsx
import React, { useEffect, useState } from "react";
import { Navbar6 } from "../../components/Navbar6";
import { Footer3 } from "../../components/Footer3";
import { PackagesGridSection } from "../../components/PackagesGridSection";
import { loadPackagesFromSheet } from "../../data/loadPackagesFromSheet";

// 🔴 IDE TEDD BE A SAJÁT GOOGLE SHEET CSV URL-ED
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1t44ZMmAdnOjdeCYuiyw2yNmcWL61LUMrlC8zW40bt_4/gviz/tq?tqx=out:csv&gid=0";

export default function PackagesPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await loadPackagesFromSheet(SHEET_CSV_URL);
        if (mounted) {
          setPackages(data);
        }
      } catch (err) {
        console.error(err);
        if (mounted) {
          setError("Nem sikerült betölteni az utazási csomagokat.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <Navbar6 />

      {/* TARTALOM */}
      {loading && (
        <div className="container mx-auto px-4 py-20 text-center text-gray-500">
          Utazási csomagok betöltése…
        </div>
      )}

      {!loading && error && (
        <div className="container mx-auto px-4 py-20 text-center text-red-600">
          {error}
        </div>
      )}

      {!loading && !error && (
        <PackagesGridSection packages={packages} />
      )}

      <Footer3 />
    </>
  );
}
