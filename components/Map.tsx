import React from "react";

interface Location {
  name: string;
  lat: number;
  lng: number;
}

interface MapProps {
  locations: Location[];
  center: { lat: number; lng: number };
}

const Map: React.FC<MapProps> = ({ locations, center }) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;
  const q = locations.map(loc => `${loc.name}@${loc.lat},${loc.lng}`).join('|');
  const centerStr = `${center.lat},${center.lng}`;

  return (
    <div>
      <iframe
        title="Map of Locations"
        src={`https://www.google.com/maps/embed/v1/search?key=${api_key}&q=${encodeURIComponent(q)}&center=${centerStr}&zoom=15`}
        className="border-0 w-full h-[300px] md:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
