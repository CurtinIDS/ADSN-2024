import React from 'react';
import { Link } from "@nextui-org/link";

interface DayPreviewProps {
  day: number;
  date: string;
  onClick: (day: number) => void;
  isActive: boolean;
}

const DayPreview: React.FC<DayPreviewProps> = ({ day, date, onClick, isActive }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg h-[200px] ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
      <div className="absolute inset-0 bg-blue-navbar bg-opacity-80 flex flex-col justify-between p-5">
        <h2 className="text-white text-3xl font-bold mb-3">Day {day}</h2>
        <p className="text-white text-sm">{date}</p>
        <Link
          href={`/ADSN-2024/program#day-${day}`}
          onClick={(e) => {
            e.preventDefault();
            onClick(day);
          }}
          className="bg-white text-blue-navbar py-2 px-4 rounded inline-flex items-center mt-3 hover:bg-gray-100 transition-colors text-base"
        >
          <span className="mr-2">VIEW SCHEDULE</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DayPreview;
