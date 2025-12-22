import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductHeader9 } from "../../components/ProductHeader9";
import { usePackages } from "../../context/PackagesContext"; // A context hook importálása

export default function PackageDetailsPage() {
  const { id } = useParams();
  const { packages, loading, error } = usePackages(); // Adatok a globális tárolóból
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    // Amikor megérkeznek a csomagok (vagy változik az ID), megkeressük a megfelelőt
    if (packages.length > 0 && id) {
      const found = packages.find((p) => p.id === Number(id));
      setTrip(found || null);
    }
  }, [packages, id]);

  if (loading) return <div className="py-24 text-center">Betöltés...</div>;
  if (error) return <div className="py-24 text-center text-red-600">{error}</div>;
  
  // Ha betöltött, de nincs ilyen ID
  if (!loading && packages.length > 0 && !trip) {
    return <div className="py-24 text-center text-gray-500">A csomag nem található.</div>;
  }

  return <ProductHeader9 trip={trip} />;
}