import AdsnButton from "@/components/AdsnButton";
import Image from "next/image";

const Adsn2023 = () => {
  return (
    <div className="p-10 relative flex justify-center items-center w-full bg-gray-300 text-black">
      <div className="text-center w-full">
        <h1 className="p-6 font-extrabold tracking-wide text-4xl">
          ADSN Conference 2023 - Adelaide, SA
        </h1>
        <p className="p-10 text-xl">
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
          className="px-10"
        />
        <div className="p-10 flex justify-center">
          <AdsnButton text="See ADSN Conference 2023" />
        </div>
      </div>
    </div>
  );
};

export default Adsn2023;
