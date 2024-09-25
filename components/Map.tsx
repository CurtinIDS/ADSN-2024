import React from "react";

interface Location {
  name: string;
  lat: number;
  lng: number;
  place_id: string;
}

interface MapProps {
  locations: Location[];
  center: { lat: number; lng: number };
  showDirections?: boolean;
  origin?: Location;
  destination?: Location;
  zoom?: number;
  locationColors?: { [key: string]: string };
}

const Map: React.FC<MapProps> = ({ locations, center, showDirections = false, origin, destination, zoom = 15, locationColors = {} }) => {
  const api_key = process.env.GOOGLE_MAPS_API_KEY;

  let src: string;

  if (showDirections && origin && destination) {
    const originStr = `place_id:${origin.place_id}`;
    const destinationStr = `place_id:${destination.place_id}`;
    src = `https://www.google.com/maps/embed/v1/directions?key=${api_key}&origin=${originStr}&destination=${destinationStr}&mode=walking&zoom=${zoom}`;
  } else if (locations.length === 1) {
    src = `https://www.google.com/maps/embed/v1/place?key=${api_key}&q=place_id:${locations[0].place_id}&zoom=${zoom}`;
  } else {
    const centerStr = `${center.lat},${center.lng}`;
    const markers = locations.map(loc => {
      const color = locationColors[loc.name] || 'red';
      return `color:${color}|label:${loc.name[0]}|${loc.lat},${loc.lng}`;
    }).join('&markers=');
    src = `https://www.google.com/maps/embed/v1/view?key=${api_key}&center=${centerStr}&zoom=${zoom}&markers=${markers}`;
  }

  return (
    <div>
      <iframe
        title="Map of Locations"
        src={src}
        className="border-0 w-full h-[300px] md:h-[500px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
