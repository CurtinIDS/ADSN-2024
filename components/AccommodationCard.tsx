import React from 'react';
import { FaWifi, FaUtensils, FaDumbbell, FaParking, FaSwimmingPool, FaBed } from 'react-icons/fa';
import { Link } from "@nextui-org/link";

interface AccommodationCardProps {
  id: string;
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
  bookingConditions?: (string | { text: string; highlight: string })[];
  imageUrl: string;
  website?: string; // Add this line
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
  imageUrl,
  website, // Add this line
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

  const renderSpecialOffer = (text: string) => {
    const parts = text.split(/(Superior Room|click here)/);
    return parts.map((part, index) => {
      if (part === 'Superior Room') {
        return (
          <Link key={index} href="https://www.nesuto.com/curtin/accommodation/hotel-guest-room" target="_blank" rel="noopener noreferrer" className="text-blue-navbar hover:text-blue-700 hover:underline">
            {part}
          </Link>
        );
      } else if (part === 'click here') {
        return (
          <Link key={index} href="https://reservations.nesuto.com/113917?discount=ADSN24" target="_blank" rel="noopener noreferrer" className="text-blue-navbar hover:text-blue-700 hover:underline">
            {part}
          </Link>
        );
      }
      return part;
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full">
      <div className="bg-gray-100 text-gray-900 p-6 rounded-lg shadow-md flex flex-col lg:flex-row w-full">
        <div className="lg:w-2/3 pr-6">
          <h2 className="text-blue-navbar text-5xl font-bold mb-4">
            {website ? (
              <a 
                href={website}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline transition-colors"
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h2>
          <p className="text-lg mb-4">{description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Amenities:</h3>
              <ul className="grid grid-cols-2 gap-2 text-base">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    {getAmenityIcon(amenity)}
                    <span className="ml-2">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Location:</h3>
              <p className="text-base">{location}</p>
              <p className="text-base">{address}</p>
              <p className="text-base">Tel: {phone}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Directions:</h3>
            <div className="flex flex-wrap gap-2">
              {walkingDirections && (
                <a href={walkingDirections} target="_blank" rel="noopener noreferrer" className="text-base bg-blue-navbar text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                  Walking 
                </a>
              )}
              <a href={drivingDirections} target="_blank" rel="noopener noreferrer" className="text-base bg-blue-navbar text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                Driving 
              </a>
              {publicTransportDirections && (
                <a href={publicTransportDirections} target="_blank" rel="noopener noreferrer" className="text-base bg-blue-navbar text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                  Public Transport 
                </a>
              )}
            </div>
          </div>
          {name === "Nesuto Curtin Perth Hotel" && (
            <>
              {specialOffer && (
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold mb-2">Special Offer:</h3>
                  <p className="text-base">{renderSpecialOffer(specialOffer)}</p>
                </div>
              )}
              {bookingConditions && (
                <div className="mt-4">
                  <h3 className="text-2xl font-semibold mb-2">Booking Conditions:</h3>
                  <ul className="list-disc pl-5 text-base">
                    {bookingConditions.map((condition, index) => (
                      <li key={index}>
                        {typeof condition === 'string' ? (
                          condition
                        ) : (
                          <>
                            {condition.text}
                            <span className="text-blue-navbar font-semibold">{condition.highlight}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;