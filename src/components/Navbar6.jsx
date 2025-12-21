"use client";
import { Link } from 'react-router-dom';
import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";

  return {
    toggleMobileMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
  };
};

export function Navbar6() {
  const useActive = useRelume();

  return (
    <section
      id="relume"
      // EZ AZ EGYETLEN CSÍK MARAD (border-b):
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-4 md:px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        {/* LOGÓ */}
        <a href="/" className="flex-shrink-0 flex items-center">
          <img
            src="/Logo4.png"
            alt="Utazási Iroda Logo"
            className="h-18 w-auto md:h-20 lg:h-30 object-contain"
          />
        </a>

        {/* ASZTALI MENÜ (Desktop) */}
        {/* JAVÍTÁS: Innen kivettem a 'border-b border-border-primary' részt, hogy ne legyen dupla csík */}
        <div className="absolute hidden h-screen overflow-auto bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-start   lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row gap-x-4">
            <Link to="/csomagok"
              className="relative block w-auto py-3 text-lg lg:inline-block lg:px-4 lg:py-6 lg:text-2xl"
            >
              Utazási csomagok
            </Link>
            <Link to="/blog"
              className="relative block w-auto py-3 text-lg lg:inline-block lg:px-4 lg:py-6 lg:text-2xl"
            >
              Blog
            </Link>
            <Link to="/contact"
              className="relative block w-auto py-3 text-lg lg:inline-block lg:px-4 lg:py-6 lg:text-2xl"
            >
              Kapcsolat
            </Link>
          </div>
        </div>

        {/* MOBIL HAMBURGER GOMB */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>

      {/* MOBIL MENÜ TARTALMA (Drawer) */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            // A mobil menü alján marad a csík, ez így helyes:
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <Link to="/csomagok"
                className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
              >
                Utazási csomagok
              </Link>
              <Link to="/blog"
                className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
              >
                Blog
              </Link>
              <Link to="/contact"
                className="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
              >
                Kapcsolat
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}