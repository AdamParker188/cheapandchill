import React, { useEffect, useState } from "react";
import { Navbar6 } from "../../components/Navbar6";
import { Header98 } from "../../components/Header98";
import { Layout239 } from "../../components/Layout239";
import { Product10 } from "../../components/Product10";
import { Blog64 } from "../../components/Blog64";
import { Cta32 } from "../../components/Cta32";
import { Footer3 } from "../../components/Footer3";

import { loadPackagesFromSheet } from "../../data/loadPackagesFromSheet";

// 🔴 IDE MÁSOLD BE A SAJÁT GOOGLE SHEET CSV URL-ED
const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1t44ZMmAdnOjdeCYuiyw2yNmcWL61LUMrlC8zW40bt_4/gviz/tq?tqx=out:csv&gid=0";

export default function Page() {
  const [packages, setPackages] = useState([]);
  const [loadingPackages, setLoadingPackages] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await loadPackagesFromSheet(SHEET_CSV_URL);
        if (mounted) setPackages(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (mounted) setLoadingPackages(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <Navbar6 />
      <Header98 />

      {/* ✅ Kiemelt ajánlatok: csak akkor rendereljük, ha már van adat */}
      {loadingPackages ? (
        <div className="container mx-auto px-4 py-12 text-center text-gray-500">
          Ajánlatok betöltése…
        </div>
      ) : (
        <Product10 packages={packages} />
      )}

      <Layout239 />
      <Blog64 />
      <Cta32 />
      <Footer3 />
    </div>
  );
}
