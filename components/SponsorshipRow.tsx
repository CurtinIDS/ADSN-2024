import React from "react";

interface SponsorshipRowProps {
  benefits: string;
  benefitsMobile?: string; // Shorter description to fit mobile screens
  platinum: string;
  gold: string;
  silver: string;
  bronze: string;
}

const SponsorshipRow: React.FC<SponsorshipRowProps> = ({
  benefits,
  benefitsMobile = "",
  platinum,
  gold,
  silver,
  bronze,
}) => {
  return (
    <tr className="border-b bg-gray-background text-xs md:text-xl items-center text-center text-blue-navbar">
      <th scope="row" className="p-3 md:px-6 md:py-4">
        <div className="text-gray-900 md:font-semibold">
          {benefitsMobile !== "" ? benefitsMobile : benefits}
        </div>
      </th>
      <td className="p-1 md:px-6 md:py-4 md:font-extrabold">{platinum}</td>
      <td className="p-1 md:px-6 md:py-4 md:font-extrabold">{gold}</td>
      <td className="p-1 md:px-6 md:py-4 md:font-extrabold">{silver}</td>
      <td className="p-1 md:px-6 md:py-4 md:font-extrabold">{bronze}</td>
    </tr>
  );
};

export default SponsorshipRow;
