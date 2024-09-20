'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { programData } from '../data/programData';
import ScheduleTable from './ScheduleTable';
import DayPreview from './DayPreview';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Program = () => {
  useSmoothScroll();
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const scrollToDay = useCallback((day: number) => {
    const previewElement = document.getElementById(`day-preview-${day}`);
    const scheduleElement = document.getElementById(`day-${day}`);
    
    if (previewElement && scheduleElement) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      
      // Calculate the position to scroll to (just above the schedule table)
      const schedulePosition = scheduleElement.getBoundingClientRect().top;
      const offsetPosition = schedulePosition + window.scrollY - headerHeight - 20;

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Highlight both the preview and the schedule
      previewElement.classList.add('highlight-day');
      scheduleElement.classList.add('highlight-day');
      
      // Remove the highlight after 2 seconds
      setTimeout(() => {
        previewElement.classList.remove('highlight-day');
        scheduleElement.classList.remove('highlight-day');
      }, 2000);
    }
  }, []);

  const handleDayClick = (day: number) => {
    scrollToDay(day);
    setActiveDay(day === activeDay ? null : day);
    window.history.pushState(null, '', `/ADSN-2024/program#day-${day}`);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const day = parseInt(hash.replace('#day-', ''), 10);
        if (!isNaN(day) && day >= 1 && day <= programData.length) {
          setActiveDay(day);
          setTimeout(() => scrollToDay(day), 100);
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scrollToDay]);

  return (
    <div id="program" className="bg-white scroll-mt-10">
      <div className="flex flex-col justify-end w-full h-[250px] md:h-[500px] bg-cover bg-center bg-[url('/ADSN-2024/program/CurtinCampus.webp')]">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
          <span className="bg-white/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
            CONFERENCE PROGRAM
          </span>
        </h1>
      </div>

      {/* Program Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-12">
          <p className="text-2xl md:text-3xl text-center text-gray-800 leading-relaxed">
            <span className="bg-white px-6 md:px-16 py-6 inline-block w-full max-w-7xl mx-auto">
              Welcome to the 3rd Australia Data Science Network Conference at Curtin University!
            </span>
            <span className="md:text-xl md:p-10">
              Below, you will find the conference program for each day. Click on a day to view its detailed schedule.
            </span>
          </p>
        </div>

        {/* Day Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-8">
          {programData.map((day) => (
            <DayPreview
              key={day.day}
              day={day.day}
              date={day.date}
              onClick={handleDayClick}
              isActive={activeDay === day.day}
            />
          ))}
        </div>

        {/* Fixed height spacer */}
        <div className="h-8"></div>

        {/* Detailed Schedule Tables */}
        <div className="mb-8 relative">
          {programData.map((day, index) => (
            <React.Fragment key={day.day}>
              <div 
                id={`day-${day.day}`} 
                className={`scroll-mt-24 transition-all duration-300 ${
                  activeDay === day.day ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
                }`}
              >
                <ScheduleTable
                  day={day.day}
                  date={day.date}
                  schedule={day.schedule}
                  isOpen={activeDay === day.day}
                />
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Footer section with additional information */}
        <div>
          <p className="text-xl md:text-2xl text-center text-gray-800 leading-relaxed">
            <span className="bg-white px-6 md:px-16 py-6 inline-block w-full max-w-7xl mx-auto">
              The conference program is subject to change. Please check back regularly for updates and additional details about speakers and sessions.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
