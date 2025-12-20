"use client";
import { Link } from 'react-router-dom';

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar6() {
  const useActive = useRelume();
  
  // Ezt a tartalmat használjuk mindkét helyen (asztali és mobil dropdown)
  const dropdownContent = (
    <div className="mx-auto flex size-full max-w-full items-center justify-between">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="grid flex-1 auto-cols-fr grid-cols-1 gap-x-8 gap-y-6 py-4 md:grid-cols-3 md:gap-y-0 md:py-8 lg:pr-8">
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Utazási lehetőségek
            </h4>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 1"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">
                  Utazási csomagok
                </h5>
                <p className="hidden text-sm md:block">
                  Válogatott utazási ajánlatok fiataloknak
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 2"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Blog</h5>
                <p className="hidden text-sm md:block">
                  Utazási történetek és tippek kezdőknek
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 3"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Kapcsolat</h5>
                <p className="hidden text-sm md:block">
                  Írj nekünk bármilyen kérdéssel
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 4"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Rólam</h5>
                <p className="hidden text-sm md:block">
                  Ismerd meg az utazási ötletek mögötti srácot
                </p>
              </div>
            </a>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Közösség
            </h4>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 5"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">
                  Utazási csomagok
                </h5>
                <p className="hidden text-sm md:block">
                  Fedezd fel az összes elérhető utazási
                  lehetőséget
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 6"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Blog</h5>
                <p className="hidden text-sm md:block">
                  Olvasd el a legújabb utazási történeteket
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 7"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Kapcsolat</h5>
                <p className="hidden text-sm md:block">
                  Lépj velünk kapcsolatba bármilyen ügyben
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 8"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Rólam</h5>
                <p className="hidden text-sm md:block">
                  Tudj meg többet az utazási szenvedélyemről
                </p>
              </div>
            </a>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Inspiráció
            </h4>
            <Link to="/blog"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 9"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">Utazási tippek</h5>
                <p className="hidden text-sm md:block">
                  Praktikus tanácsok költségvetési utazáshoz
                </p>
              </div>
            </Link>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 10"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">
                  Utazási történetek
                </h5>
                <p className="hidden text-sm md:block">
                  Valódi kalandok fiatal utazóktól
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 11"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">
                  Utazási útmutatók
                </h5>
                <p className="hidden text-sm md:block">
                  Részletes leírások népszerű úticélokról
                </p>
              </div>
            </a>
            <a
              href="#"
              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
            >
              <div className="flex size-6 flex-col items-center justify-center">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  alt="Icon 12"
                  className="shrink-0"
                />
              </div>
              <div className="flex flex-col items-start justify-center">
                <h5 className="font-semibold">
                  Költségvetési tippek
                </h5>
                <p className="hidden text-sm md:block">
                  Hogyan utazz olcsón és okosan
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="max-w-none relative mb-4 flex flex-1 p-6 md:max-w-[50rem] md:p-8 lg:mb-0 lg:max-w-xxs lg:py-8 lg:pl-8 lg:pr-0">
          <div className="relative z-10 grid w-full grid-cols-1 grid-rows-[auto_max-content] gap-y-4">
            <h4 className="text-sm font-semibold leading-[1.3]">
              Legújabb cikkek
            </h4>
            <div className="max-w-none grid w-full grid-cols-1 grid-rows-[auto_auto_auto_auto] items-start gap-y-2 md:block">
              <a href="#" className="flex flex-col py-2">
                <div className="relative mb-3 w-full overflow-hidden pt-[56.25%]">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                    alt="Relume placeholder image 2"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="mt-2 flex max-w-[18rem] flex-col justify-start md:mt-0">
                  <h5 className="mb-1 font-semibold">
                    Költségvetési utazás Európában
                  </h5>
                  <p className="text-sm">
                    Tanuld meg az olcsó utazás titkait
                  </p>
                  <div className="mt-2">
                    <Button
                      title="Tovább"
                      variant="link"
                      size="link"
                      className="text-sm underline"
                    >
                      Tovább
                    </Button>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <Button
                title="Összes cikk"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Összes cikk
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="relume"
      // JAVÍTÁS: px-4 mobilon, px-[5%] asztalon, hogy a logó kijjebb kerüljön
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-4 md:px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        <a href="/" className="flex-shrink-0 flex items-center">
          <img
            src="/Logo3.png"
            alt="Utazási Iroda Logo"
            // JAVÍTÁS: Reszponzív logó méret (h-16 mobilon, h-20 tableten, h-30 asztalon)
            className="h-16 w-auto md:h-20 lg:h-30 object-contain"
          />
        </a>
        <div className="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <Link to="/package"
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
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-lg lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-2xl"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span>Felfedezés</span>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      display: "block",
                      height: "var(--height-open, auto)",
                    },
                    close: {
                      opacity: 0,
                      display: "none",
                      height: "var(--height-close, 0)",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  {/* ASZTALI DROPDOWN TARTALOM */}
                  {dropdownContent}
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
        </div>
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
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <Link to="/package"
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
              <div>
                <button
                  className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                  onClick={useActive.openOnMobileDropdownMenu}
                >
                  <span>Felfedezés</span>
                  <motion.span
                    animate={useActive.animateDropdownMenuIcon}
                    variants={{
                      rotated: { rotate: 180 },
                      initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <RxChevronDown />
                  </motion.span>
                </button>
                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        display: "block",
                        height: "var(--height-open, auto)",
                      },
                      close: {
                        opacity: 0,
                        display: "none",
                        height: "var(--height-close, 0)",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                  >
                     {/* MOBIL DROPDOWN TARTALOM (Ugyanaz, mint az asztali) */}
                    {dropdownContent}
                  </motion.nav>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}