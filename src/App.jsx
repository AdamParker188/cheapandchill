// App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';

// --- OLDALAK (PAGES) IMPORTÁLÁSA ---
import HomePage from './pages/home/index.jsx';
import BlogPage from './pages/blog/index.jsx';
import ContactPage from './pages/contact/index.jsx';
// import CsomagPage from './pages/csomag/index.jsx'; // Ez a régi, törölhető
import PackagesPage from './pages/package/index.jsx'; // EZ AZ ÚJ, menő listás oldal
import BloginteractPage from './pages/bloginteract/index.jsx';
import { ProductHeader9 } from './components/ProductHeader9'; // Ez a részletes adatlap

// --- KOMPONENSEK TÖRLÉSE ---
// A többi import (Navbar, Footer, Header98 stb.) innen TÖRÖLHETŐ,
// mert ezeket az egyes oldalakon (HomePage, BlogPage stb.) belül kell használni,
// nem itt az App.jsx-ben.

export default function App() {
  return (
    <div>
      {/* A Routes dobozban vannak a szabályok */}
      <Routes>

        {/* --- FŐOLDAL --- */}
        <Route path="/" element={<HomePage />} />

        {/* --- BLOG OLDALAK --- */}
        <Route path="/blog" element={<BlogPage />} />
        {/* Egy konkrét blogbejegyzés oldala */}
        <Route path="/blog/:id" element={<BloginteractPage />} />

        {/* --- KAPCSOLAT OLDAL --- */}
        <Route path="/contact" element={<ContactPage />} />

        {/* --- UTAZÁSI CSOMAG OLDALAK --- */}
        {/* Ez az új, szűrős LISTA oldal, ami a képeden volt */}
        <Route path="/csomagok" element={<PackagesPage />} />

        {/* Ez a RÉSZLETES adatlap egyetlen csomagról */}
        {/* A kettőspont (/:id) azt jelenti, hogy itt egy változó lesz, pl. /csomag/1 */}
        <Route path="/csomag/:id" element={<ProductHeader9 />} />

      </Routes>
    </div>
  );
}