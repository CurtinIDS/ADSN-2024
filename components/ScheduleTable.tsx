import React, { useRef, useEffect, useState } from 'react';

interface ScheduleItem {
  startTime: string;
  endTime: string;
  activity: string;
}

interface ScheduleTableProps {
  day: number;
  date: string;
  schedule: ScheduleItem[];
  isOpen: boolean;
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ day, date, schedule, isOpen }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [schedule, isOpen]);

  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ maxHeight: isOpen ? `${contentHeight}px` : '0' }}
    >
      <div ref={contentRef} className="p-6">
        <h2 className="text-2xl font-bold mb-4">Day {day} - {date}</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border">Start Time</th>
              <th className="px-4 py-2 text-left border">End Time</th>
              <th className="px-4 py-2 text-left border">Activity</th>
            </tr>
          </thead>
          <tbody>
            {schedule.length > 0 ? (
              schedule.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-2 border">{item.startTime}</td>
                  <td className="px-4 py-2 border">{item.endTime}</td>
                  <td className="px-4 py-2 border break-words">{item.activity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="px-4 py-2 text-center border">Schedule details coming soon</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
