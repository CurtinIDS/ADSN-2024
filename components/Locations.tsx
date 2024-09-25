import Map from "./Map";

interface Location {
  name: string;
  address: string;
  place_id: string;
  description: string;
  lat: number;
  lng: number;
}

const tl_robertson_library: Location = {
  name: "TL Robertson Library, Level 7, Curtin University",
  address: "Curtin University, 105, Kent Street, Bentley, WA",
  place_id: "ChIJq6pqk4u8MioRs0juKm5y04k",
  description: "Level 7 of the TL Robertson Library at Curtin University offers a modern, vibrant space designed for collaboration and innovation. With panoramic views of the campus, this state-of-the-art venue features flexible seating arrangements, advanced audiovisual equipment, and dedicated breakout areas, making it an ideal setting for conferences and workshops. The open, light-filled environment encourages networking and the exchange of ideas, providing a dynamic atmosphere for participants to engage with the latest in data science research and applications. Experience the best of Curtin's academic and community spirit at this cutting-edge facility.",
  lat: -32.00542665103504,
  lng: 115.89437018811039
};

const the_hub: Location = {
  name: "The Hub, Bentley Technology Park",
  address: "2 Brodie-Hall Drive, Bentley WA 6102",
  place_id: "ChIJbbxuYoS8MioR9AM6Sl-kNmo",
  description: "The Hub at Bentley Technology Park is a premier venue designed to foster innovation and collaboration. Located just minutes from Curtin University, this modern facility offers cutting-edge technology, including a Global Streaming Centre with a super-sized curved screen, perfect for immersive presentations and industry-focused sessions. With flexible meeting spaces, high-speed connectivity, and a sleek, professional atmosphere, The Hub provides an ideal setting for networking with leading experts and exploring the latest advancements in data science. Whether you're attending a keynote or participating in a panel discussion, The Hub ensures a seamless and engaging experience.",
  lat: -31.99743335176689,
  lng: 115.89073061202362
};

const carpark_p211: Location = {
  name: "Parking 211",
  address: "Curtin University, 105, Kent Street, Bentley, WA",
  place_id: "ChIJLSNAE4y8MioR6yqyxwL0Nwo",
  description: "P211 is a parking lot located near the TL Robertson Library at Curtin University. It is a convenient option for visitors to the library and is located just a short walk from the main entrance.",
  lat: -32.007577581423064,
  lng: 115.89256509797063
};

const Locations = () => {
  return (
    <div id="locations" className="bg-white scroll-mt-10">
      <div className="flex flex-col justify-end w-full h-[300px] md:h-[600px] bg-cover bg-center bg-[url('/ADSN-2024/background_locations.webp')]">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
          <span className="bg-white/75 mb-3 px-3 md:px-12 md:py-2 inline-block">
            CONFERENCE LOCATIONS
          </span>
        </h1>
      </div>
      <div className="p-3 md:p-10 flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-col gap-6 text-black w-full max-w-6xl text-center">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 w-full">
              <h2 className="md:text-2xl">Day 1 and Day 2</h2>
              
              <h3 className="font-bold mt-4 mb-2">Getting to Curtin</h3>
              <p>
                For information on how to get to Curtin University and where to park, visit our{' '}
                <a href="https://properties.curtin.edu.au/getting-here/" className="text-blue-600 hover:underline">Getting here</a> webpage.
              </p>

              <h3 className="font-bold mt-4 mb-2">Parking</h3>
              <p>
                The most convenient parking option near Curtin University Library (Building 105) is P211.
                Accessible via Kent Street Main Entrance and off Beazley Avenue, this parking area is also
                close to the heart of the campus and provides a convenient route to the library.
              </p>
              <p className="mt-2">
                It is reasonably priced at $1.68 per hour ($6.80 max per transaction). Please note you need to
                download the <a href="https://properties.curtin.edu.au/getting-here/parking/cellopark/" className="text-blue-600 hover:underline">CellOPark</a> app to pay for parking.
              </p>

              <h4 className="font-bold md:text-xl mt-6">
                {tl_robertson_library.name}
              </h4>
              <h4>{tl_robertson_library.address}</h4>
              <p className="mt-2 text-gray-600">{tl_robertson_library.description}</p>
            </div>
            <Map
              locations={[tl_robertson_library, carpark_p211]}
              center={{ lat: -32.0060, lng: 115.8941 }}
              showDirections={true}
              origin={carpark_p211}
              destination={tl_robertson_library}
              zoom={16}
            />
          </div>
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="p-4 w-full">
              <h2 className="md:text-2xl">Day 3</h2>
              <h4 className="font-bold md:text-xl text-black">{the_hub.name}</h4>
              <h4>{the_hub.address}</h4>
              <p className="mt-2 text-gray-600">{the_hub.description}</p>
            </div>
            <Map
              locations={[the_hub]}
              center={{ lat: the_hub.lat, lng: the_hub.lng }}
              locationColors={{ [the_hub.name]: 'black' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;