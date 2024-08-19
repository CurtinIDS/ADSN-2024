import AdsnButton from "@/components/AdsnButton";
import Image from "next/image";

const PreviousConferences = () => {
  return (
    <div
      id="previous-conferences"
      className="p-3 md:p-10 relative flex justify-center items-center w-full bg-gray-300 text-black scroll-mt-10"
    >
      <div className="text-center w-full">
        <h1 className="md:p-6 font-extrabold md:tracking-wide md:text-4xl">
          Previous ADSN Conferences
        </h1>
        <p className="p-3 md:p-10 md:text-xl">
          ADSN Conference 2023 was hosted by the University of Adelaide&apos;s
          Data Science Centre.
        </p>
        <Image
          src="/ADSN-2024/background_adsn_2023.webp"
          alt="Picture of the author"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={1000}
          height={400}
          className="px-3 md:px-10"
        />
        <div className="p-10 flex justify-center">
          <AdsnButton
            text="See ADSN Conference 2023"
            url="https://www.australiandatascience.net/adsn-2023-conference/"
          />
        </div>
      </div>
    </div>
  );
};

export default PreviousConferences;
