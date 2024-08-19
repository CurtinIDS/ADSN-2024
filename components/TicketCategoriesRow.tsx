import React from "react";

interface RowProps {
  borderTop?: boolean;
  category: string;
  description: string;
  price: string;
}

const TicketCategoriesRow: React.FC<RowProps> = ({
  borderTop = false,
  category,
  description,
  price,
}) => {
  return (
    <tr
      className={`bg-white ${
        borderTop ? "border-t" : ""
      } border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
    >
      <th
        scope="row"
        className="p-3 flex items-center md:px-6 md:py-4 text-gray-900 md:whitespace-nowrap dark:text-white"
      >
        <div className="md:ps-3 md:text-xl">
          <div className="md:text-xl font-semibold">{category}</div>
          <div className="font-normal text-gray-500">{description}</div>
        </div>
      </th>
      <td className="md:text-xl p-3 md:px-6 md:py-4 text-gray-900">{price}</td>
    </tr>
  );
};

export default TicketCategoriesRow;
