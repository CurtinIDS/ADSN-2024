import Image from "next/image";

const Locations = () => {
  return (
    <div className="p-3 md:p-10 bg-gray-300 flex flex-col items-center w-full">
      <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl text-center">
        LOCATIONS
      </h1>
      <div className="flex flex-col md:flex-row gap-6 text-white w-full max-w-6xl text-center">
        <div className="bg-blue-navbar rounded-lg flex-1 flex flex-col overflow-hidden">
          <div className="w-full">
            <Image
              src="/ADSN-2024/event_schedule_robertson.webp"
              alt="The Hub"
              width={400}
              height={30}
              layout="responsive"
            />
          </div>
          <div className="p-4 w-full">
            <h4 className="font-bold">DAY 1 & DAY 2 (2 -3 Dec, 2024)</h4>
            <h4 className="italic">
              TL Robertson Library, Level 7, Curtin University, Bentley, WA
            </h4>
          </div>
        </div>
        <div className="bg-blue-navbar rounded-lg flex-1 flex flex-col overflow-hidden">
          <div className="w-full">
            <Image
              src="/ADSN-2024/event_schedule_techpark.webp"
              alt="The Hub"
              width={400}
              height={30}
              layout="responsive"
            />
          </div>
          <div className="p-4 w-full">
            <h4 className="font-bold text-center">DAY 3 (4 Dec, 2024)</h4>
            <h4 className="italic text-center">
              The Hub, Bentley Technology Park
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
