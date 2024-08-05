import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="relative flex justify-center flex-grow">
      <div className="relative flex flex-col h-[calc(100vh-64px)] w-full">
        <div className="relative flex-grow">
          <Image
            aria-hidden="true"
            data-placeholder-image=""
            className="object-cover w-full h-full"
            src="/ADSN-2024/background_perth_skyline.webp"
            fill={true}
            alt="Perth Skyline"
          />
          <div className="absolute p-3 rounded-b-xl shadow-lg bg-[#e6e4dc] bg-opacity-75 md:bg-opacity-85 md:right-40 md:top-0 md:pl-11 md:pr-4 md:py-8 md:w-[500px]">
            <h1 className="mb-2 relative text-gray-700 font-extrabold md:tracking-wide md:text-4xl leading-tight">
              <span>The 3rd Australian Data Science Network Conference</span>
              <br />
              <span className="text-blue-900 text-[37px]">ADSN Conference</span>
              <br />
              <span className="text-blue-900 text-[37px]">2024</span>
            </h1>
            <p className="mb-4 font-semibold md:text-xl text-gray-700">
              Perth, Australia
            </p>
            <p className="mb-1 font-bold md:text-2xl md:tracking-wide text-gray-700">
              2 - 4 December, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
