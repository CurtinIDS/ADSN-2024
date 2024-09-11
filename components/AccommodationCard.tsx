import React from 'react';
import { FaWifi, FaUtensils, FaDumbbell, FaParking, FaSwimmingPool, FaBed } from 'react-icons/fa';

interface AccommodationCardProps {
  name: string;
  description: string;
  amenities: string[];
  location: string;
  address: string;
  phone: string;
  walkingDirections?: string;
  drivingDirections: string;
  publicTransportDirections?: string;
  specialOffer?: string;
  bookingConditions?: string[];
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  name,
  description,
  amenities,
  location,
  address,
  phone,
  walkingDirections,
  drivingDirections,
  publicTransportDirections,
  specialOffer,
  bookingConditions,
}) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'complimentary wi-fi':
        return <FaWifi />;
      case 'on-site dining options':
      case 'nearby dining options':
        return <FaUtensils />;
      case 'fitness centre':
        return <FaDumbbell />;
      case 'street parking':
      case 'on-site free parking':
        return <FaParking />;
      case 'swimming pool / spa / sauna':
        return <FaSwimmingPool />;
      default:
        return <FaBed />;
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p className="mb-4">{description}</p>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Amenities:</h3>
        <ul className="grid grid-cols-2 gap-2">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center">
              {getAmenityIcon(amenity)}
              <span className="ml-2">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Location:</h3>
        <p>{location}</p>
        <p>{address}</p>
        <p>Tel: {phone}</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Directions:</h3>
        {walkingDirections && (
          <p>
            <a href={walkingDirections} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Walking Directions
            </a>
          </p>
        )}
        <p>
          <a href={drivingDirections} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Driving Directions
          </a>
        </p>
        {publicTransportDirections && (
          <p>
            <a href={publicTransportDirections} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Public Transport Directions
            </a>
          </p>
        )}
      </div>
      {specialOffer && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Special Offer:</h3>
          <p>{specialOffer}</p>
        </div>
      )}
      {bookingConditions && (
        <div>
          <h3 className="font-semibold mb-2">Booking Conditions:</h3>
          <ul className="list-disc pl-5">
            {bookingConditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccommodationCard;
