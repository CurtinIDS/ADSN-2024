import React from "react";

interface MapProps {
  // https://developers.google.com/maps/documentation/places/web-service/place-id
  place_id: string;
  location: string;
}

const Map: React.FC<MapProps> = ({ location, place_id }) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <div>
      <iframe
        title={`Map of ${location}`}
        src={`https://www.google.com/maps/embed/v1/place?key=${api_key}&q=place_id:${place_id}`}
        className="border-0 w-full h-[300px] md:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
