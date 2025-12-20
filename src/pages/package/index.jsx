import React from 'react';
import { Navbar6 } from '../../components/Navbar6';
import { Footer3 } from '../../components/Footer3';
// FONTOS: Itt a 10-es (Rácsos) komponenst hívjuk be, NEM a 9-est!
import { Product10 } from '../../components/Product10'; 

export default function PackagesPage() {
  return (
    <div>
      <Navbar6 />
      {/* Ez rajzolja ki a kártyákat egymás mellé: */}
      <Product10 />
      <Footer3 />
    </div>
  );
}