'use client';

import Image from "next/image";
import AccommodationCard from "./AccommodationCard";
import { hotelInfo } from "../data/hotelInfo";
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import React, { Suspense, useCallback, useEffect } from "react";
import { Link } from "@nextui-org/link";

const Accommodation = () => {
  useSmoothScroll();

  const scrollToHotel = useCallback((id: string) => {
    const element = document.getElementById(`hotel-${id}`);
    if (element) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerHeight - 20; // Additional offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Add highlight effect
      element.classList.add('highlight-hotel');
      setTimeout(() => {
        element.classList.remove('highlight-hotel');
      }, 2000);
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#hotel-', '');
      setTimeout(() => scrollToHotel(id), 100);
    }
  }, [scrollToHotel]);

  return (
    <div id="accommodation" className="bg-gray-900 scroll-mt-10">
      <div className="flex flex-col justify-end w-full h-[250px] md:h-[500px] bg-cover bg-center bg-[url('/ADSN-2024/pertheq.webp')]">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
          <span className="bg-white/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
            ACCOMMODATION OPTIONS
          </span>
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="md:p-6 font-bold md:tracking-wide md:text-2xl text-center text-white mb-12 leading-relaxed">
          <span className="bg-gray-800/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
            Welcome to the 3rd Australia Data Science Network Conference at Curtin University! We have selected a range of nearby hotels to ensure you have a comfortable and convenient stay during the conference. Below, you will find details about three recommended hotels, including their locations, amenities, and directions on how to get there. A map with directions from each hotel to Curtin University is also provided for your convenience.
          </span>
        </p>

        {/* 2x2 Grid of Hotel Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {hotelInfo.map((hotel) => (
            <div
              key={hotel.id}
              className="relative overflow-hidden rounded-lg h-[280px]"
            >
              <Suspense fallback={<div className="w-full h-full bg-gray-300 animate-pulse"></div>}>
                <Image
                  src={hotel.imageUrl}
                  alt={hotel.name}
                  fill
                  className="absolute inset-0 object-cover"
                  loading="lazy"
                />
              </Suspense>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-5">
                <h2 className="text-white text-2xl font-bold mb-3">
                  {hotel.website ? (
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {hotel.name}
                    </a>
                  ) : (
                    hotel.name
                  )}
                </h2>
                <p className="text-white text-sm">{hotel.amenities}</p>
                <Link
                  href={`/ADSN-2024/accommodation#hotel-${hotel.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToHotel(hotel.id.toString());
                    window.history.pushState(null, '', `/ADSN-2024/accommodation#hotel-${hotel.id}`);
                  }}
                  className="bg-blue-navbar text-white py-2 px-4 rounded inline-flex items-center mt-3 hover:bg-blue-700 transition-colors text-base"
                >
                  <span className="mr-2">VIEW DETAILS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Hotel Information */}
        <div>
          {hotelInfo.map((hotel, index) => (
            <React.Fragment key={hotel.id}>
              {index > 0 && <div className="my-8 border-t border-gray-700"></div>}
              <div id={`hotel-${hotel.id}`} className="scroll-mt-24 transition-all duration-300">
                <AccommodationCard
                  {...hotel}
                  amenities={hotel.amenities.split(', ')}
                  imageUrl={hotel.imageUrl}
                  website={hotel.website} // Add this line
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
