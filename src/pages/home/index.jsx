import React from "react";
import { Navbar6 } from "../../components/Navbar6";
import { Header98 } from "../../components/Header98";
import { Layout239 } from "../../components/Layout239";
import { Product10 } from "../../components/Product10";
import { Blog64 } from "../../components/Blog64";
import { Cta32 } from "../../components/Cta32";
import { Footer3 } from "../../components/Footer3";

import { usePackages } from "../../context/PackagesContext";

export default function Page() {
  const { packages, loading, error } = usePackages();

  return (
    <div>
      <Navbar6 />
      <Header98 />

      {/* ✅ Kiemelt ajánlatok: a globális context-ből betöltött csomagokkal */}
      {loading ? (
        <div className="container mx-auto px-4 py-12 text-center text-gray-500">
          Ajánlatok betöltése…
        </div>
      ) : error ? (
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="text-red-600 font-semibold">
            Nem sikerült betölteni a csomagokat
          </div>
          <div className="text-gray-600 text-sm mt-2">{error}</div>
        </div>
      ) : (
        <Product10 packages={packages} />
      )}

      <Layout239 />
      <Footer3 />
    </div>
  );
}
