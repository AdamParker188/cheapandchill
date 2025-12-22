// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/index.jsx";
import BlogPage from "./pages/blog/index.jsx";
import ContactPage from "./pages/contact/index.jsx";
import PackagesPage from "./pages/package/index.jsx";
import BloginteractPage from "./pages/bloginteract/index.jsx";
import PackageDetailsPage from "./pages/packageDetails/index.jsx";

import { PackagesProvider } from "./context/PackagesContext.jsx";

export default function App() {
  return (
    <PackagesProvider>
      <Routes>
        {/* FŐOLDAL */}
        <Route path="/" element={<HomePage />} />

        {/* BLOG */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BloginteractPage />} />

        {/* KAPCSOLAT */}
        <Route path="/contact" element={<ContactPage />} />

        {/* CSOMAGOK */}
        <Route path="/csomagok" element={<PackagesPage />} />
        <Route path="/csomag/:id" element={<PackageDetailsPage />} />
      </Routes>
    </PackagesProvider>
  );
}
