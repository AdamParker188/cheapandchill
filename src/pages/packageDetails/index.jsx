import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductHeader9 } from "../../components/ProductHeader9";
import { loadPackagesFromSheet } from "../../data/loadPackagesFromSheet";

const SHEET_CSV_URL = "IDE A CSV URL";

export default function PackageDetailsPage() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await loadPackagesFromSheet(SHEET_CSV_URL);
        if (mounted) setPackages(data);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  if (loading) return <div className="py-20 text-center text-gray-500">Betöltés…</div>;

  return <ProductHeader9 packages={packages} />;
}
