import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loadPackagesFromSheet } from "../data/loadPackagesFromSheet";
import { SHEET_CSV_URL } from "../config/sheet";

const PackagesContext = createContext(null);

export function PackagesProvider({ children }) {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await loadPackagesFromSheet(SHEET_CSV_URL);

        if (mounted) {
          setPackages(Array.isArray(data) ? data : []);
        }
      } catch (e) {
        console.error("SHEET LOAD ERROR:", e);
        if (mounted) {
          setError(e?.message || "Nem sikerült betölteni a csomagokat.");
          setPackages([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, []);

  const value = useMemo(() => ({ packages, loading, error }), [packages, loading, error]);

  return <PackagesContext.Provider value={value}>{children}</PackagesContext.Provider>;
}

export function usePackages() {
  const ctx = useContext(PackagesContext);
  if (!ctx) throw new Error("usePackages() must be used inside <PackagesProvider>");
  return ctx;
}
