import React from "react";

interface KeyDatesRowProps {
  event: string;
  date: string;
}

const KeyDatesRow: React.FC<KeyDatesRowProps> = ({ event, date }) => {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
      >
        <div className="md:text-xl font-semibold">{event}</div>
      </th>
      <td className="md:text-xl p-3 md:px-6 md:py-4 text-gray-900">{date}</td>
    </tr>
  );
};

export default KeyDatesRow;
