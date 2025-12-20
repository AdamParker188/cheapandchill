"use client";
import { useParams, Link } from 'react-router-dom';
import { travelPackages } from '../data/travelPackages'; 
import { Navbar6 } from './Navbar6';
import { Footer3 } from './Footer3';
import { Button } from "@relume_io/relume-ui";
import { BiSolidStar, BiSolidStarHalf, BiStar, BiMap, BiCalendar, BiSolidPlane, BiCheck } from "react-icons/bi";
import React from "react";

const Star = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(5)].map((_, i) => (
         <div key={i}>{i < fullStars ? <BiSolidStar /> : (hasHalfStar && i === fullStars ? <BiSolidStarHalf /> : <BiStar />)}</div>
      ))}
    </div>
  );
};

export function ProductHeader9() {
  const { id } = useParams();
  const trip = travelPackages.find((t) => t.id === parseInt(id));

  if (!trip) return <div><Navbar6 /><div className="text-center py-40">Nincs ilyen utazás!</div><Footer3 /></div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar6 />

      <main className="flex-grow px-[5%] py-8 md:py-12">
        <div className="container max-w-6xl">
          
          {/* FEJLÉC */}
          <div className="mb-8">
            <Link to="/packages" className="text-sm text-gray-500 hover:underline mb-4 block">← Vissza a csomagokhoz</Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{trip.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-700">
              {trip.dateLabel && <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"><BiCalendar className="text-primary"/>{trip.dateLabel}</div>}
              {trip.location && <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"><BiMap className="text-primary"/>{trip.location}</div>}
              <div className="flex items-center gap-2 px-3 py-1"><Star rating={trip.rating} /> ({trip.rating})</div>
            </div>
          </div>

          {/* FŐ KÉP */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-[21/9]">
            <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 lg:gap-16">
            
            {/* --- BAL OSZLOP: LEÍRÁS ÉS SZÁLLÁSOK --- */}
            <div className="space-y-12">
              
              <section>
                <h2 className="text-2xl font-bold mb-4">Az utazásról</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{trip.fullDescription || trip.description}</p>
              </section>

              {/* --- ITT JÖNNEK A SZÁLLÁS KÁRTYÁK --- */}
              {trip.hotels && (
                <section>
                  <h2 className="text-2xl font-bold mb-6">Választható Szállások</h2>
                  <div className="grid grid-cols-1 gap-8">
                    
                    {/* 1. AJÁNLOTT SZÁLLÁS KÁRTYA */}
                    <div className="border border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-blue-50 px-6 py-2 border-b border-blue-100 flex justify-between items-center">
                        <span className="font-bold text-blue-800 uppercase text-xs tracking-wider">🌟 Ajánlott Opció</span>
                        <span className="text-sm text-blue-600 font-semibold">{trip.hotels.recommended.priceLabel}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-48 md:h-auto">
                          <img src={trip.hotels.recommended.image} className="w-full h-full object-cover" alt="Hotel" />
                        </div>
                        <div className="p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{trip.hotels.recommended.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{trip.hotels.recommended.description}</p>
                          </div>
                          <a href={trip.hotels.recommended.url} target="_blank" rel="noopener noreferrer">
                            <Button className="w-full">Megnézem a Booking-on</Button>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* 2. BUDGET SZÁLLÁS KÁRTYA */}
                    <div className="border border-green-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="bg-green-50 px-6 py-2 border-b border-green-100 flex justify-between items-center">
                        <span className="font-bold text-green-800 uppercase text-xs tracking-wider">💰 Pénztárcabarát Opció</span>
                        <span className="text-sm text-green-600 font-semibold">{trip.hotels.budget.priceLabel}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="h-48 md:h-auto">
                          <img src={trip.hotels.budget.image} className="w-full h-full object-cover" alt="Hostel" />
                        </div>
                        <div className="p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{trip.hotels.budget.name}</h3>
                            <p className="text-gray-600 text-sm mb-4">{trip.hotels.budget.description}</p>
                          </div>
                          <a href={trip.hotels.budget.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary" className="w-full border-green-200 text-green-700 hover:bg-green-50">Megnézem a Booking-on</Button>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              )}
            </div>

            {/* --- JOBB OSZLOP: CSAK REPÜLŐJEGY (Sticky) --- */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="border shadow-lg rounded-xl p-6 bg-white border-t-4 border-t-primary">
                <p className="text-gray-500 text-sm mb-1">Becsült útiköltség / fő</p>
                <h3 className="text-4xl font-bold text-primary mb-6">{trip.price}</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">A szervezés menete:</h4>
                  <ul className="text-sm space-y-2 text-gray-600">
                    <li className="flex gap-2"><BiCheck className="text-green-500 text-lg"/> 1. Foglald le a repjegyet itt lent</li>
                    <li className="flex gap-2"><BiCheck className="text-green-500 text-lg"/> 2. Válassz szállást a bal oldali listából</li>
                    <li className="flex gap-2"><BiCheck className="text-green-500 text-lg"/> 3. Találkozunk a reptéren!</li>
                  </ul>
                </div>

                <a href={trip.flightUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full py-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
                      <BiSolidPlane className="text-xl" /> Repülőjegy foglalása
                  </Button>
                </a>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  A gombra kattintva a légitársaság oldalára jutsz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer3 />
    </div>
  );
}