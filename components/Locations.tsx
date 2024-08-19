import Map from "./Map";

interface Location {
  name: string;
  address: string;
  place_id: string;
}

const tl_robertson_library: Location = {
  name: "TL Robertson Library, Level 7, Curtin University",
  address: "Curtin University, 105, Kent Street, Bentley, WA",
  place_id: "ChIJq6pqk4u8MioRs0juKm5y04k",
};

const the_hub: Location = {
  name: "The Hub, Bentley Technology Park",
  address: "2 Brodie-Hall Drive, Bentley WA 6102",
  place_id: "ChIJbbxuYoS8MioR9AM6Sl-kNmo",
};

const Locations = () => {
  return (
    <div id="locations" className="scroll-mt-10">
      <div className="flex flex-col justify-end w-full h-[300px] md:h-[600px] bg-cover bg-center bg-[url('/ADSN-2024/background_locations.webp')]">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
          <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
            <span className="bg-white/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
              LOCATIONS
            </span>
          </h1>
        </h1>
      </div>
      <div className="p-3 md:p-10 bg-gray-300 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-col gap-6 text-black w-full max-w-6xl text-center">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 w-full">
              <h4 className="font-bold md:text-xl">
                {tl_robertson_library.name}
              </h4>
              <h4>{tl_robertson_library.address}</h4>
            </div>
            <Map
              location={tl_robertson_library.name}
              place_id={tl_robertson_library.place_id}
            />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 w-full">
              <h4 className="font-bold md:text-xl">{the_hub.name}</h4>
              <h4>{the_hub.address}</h4>
            </div>
            <Map location={the_hub.name} place_id={the_hub.place_id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
