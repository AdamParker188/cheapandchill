import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar6 } from "./components/Navbar6";
import { Header98 } from "./components/Header98";
import { Header65 } from "./components/Header65";
import { Layout239 } from "./components/Layout239";
import { Product10 } from "./components/Product10";
import { Layout503 } from "./components/Layout503";
import { Blog64 } from "./components/Blog64"; 
import { Cta31 } from "./components/Cta31";
import { Cta32 } from "./components/Cta32";
import { Comparison7 } from "./components/Comparison7";
import { Footer3 } from "./components/Footer3";
import HomePage from './pages/home/index.jsx'; 
import BlogPage from './pages/blog/index.jsx';
import ContactPage from './pages/contact/index.jsx';
import CsomagPage from './pages/csomag/index.jsx';
import PackagesPage from './pages/package/index.jsx';
import BloginteractPage from './pages/bloginteract/index.jsx'
import { ProductHeader9 } from './components/ProductHeader9';

export default function App() {
  return (
    <div>
      {/* A Routes dobozban vannak a szabályok */}
      <Routes>
        
        {/* Ha a címsor üres (/), akkor a HomePage jöjjön be */}
        <Route path="/" element={<HomePage />} />

        {/* Ha a címsor /blog, akkor a BlogPage */}
        <Route path="/blog" element={<BlogPage />} />

        {/* Ha a címsor /kapcsolat, akkor a ContactPage */}
        <Route path="/contact" element={<ContactPage />} />

        {/* További oldalak... */}
        {/* <Route path="/csomagok" element={<PackagesPage />} /> */}
        <Route path="/csomag" element={<CsomagPage />} />
        <Route path="/package" element={<PackagesPage />} />
        <Route path="/bloginteract" element={<BloginteractPage />} /> 
        <Route path="/csomag/:id" element={<ProductHeader9 />} />
        <Route path="/packages" element={<PackagesPage />} /> {/* Ez a Lista */}
        <Route path="/csomag/:id" element={<ProductHeader9 />} /> {/* Ez a Részlet */}

      </Routes>
    </div>
  );
}
