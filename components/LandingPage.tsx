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
          <div className="absolute right-40 top-0 bg-[#e6e4dc] bg-opacity-85 pl-11 pr-4 py-8 rounded-b-xl shadow-lg w-[500px]">
            <h1 className="mb-2 relative text-gray-700 font-extrabold tracking-wide text-4xl leading-tight">
              <span>The 3rd Australian Data Science Network Conference</span>
              <br />
              <span className="text-blue-900 text-[37px]">ADSN Conference</span>
              <br />
              <span className="text-blue-900 text-[37px]">2024</span>
            </h1>
            <p className="mb-4 font-semibold text-xl text-gray-700">
              Perth, Australia
            </p>
            <p className="mb-1 font-bold text-2xl tracking-wide text-gray-700">
              2 - 4 December, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
