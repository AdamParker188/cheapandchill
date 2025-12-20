// src/pages/package/index.jsx
import React from 'react';
import { Navbar6 } from '../../components/Navbar6';
import { Footer3 } from '../../components/Footer3';
// FONTOS: Most az ÚJ, PackagesGridSection komponenst importáljuk!
import { PackagesGridSection } from '../../components/PackagesGridSection';

export default function PackagesPage() {
  return (
    <>
      <Navbar6 />
      {/* Az új, rácsos, keresős komponens meghívása */}
      <PackagesGridSection />
      <Footer3 />
    </>
  );
}