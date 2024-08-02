import Image from "next/image";
import NavigationBar from "./navigationbar";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <main className="w-full">
        <section>
          <div className="fixed inset-0 z-0">
            <Image
              aria-hidden="true"
              data-placeholder-image=""
              className="object-cover w-full h-full opacity-100 transition-opacity duration-500 ease-linear"
              src="/ADSN-2024/perth_skyline.webp"
              alt="Perth Skyline"
              fill={true}
            />
          </div>
          <div
            className="absolute right-40 bg-opacity-85 bg-gray-200 pl-11 pr-4 py-8 rounded-b-xl shadow-lg w-[350px]"
            style={{ backgroundColor: "rgba(230, 228, 220, 0.85)" }}
          >
            <h1 className="mb-2 relative text-gray-700 font-extrabold tracking-wide text-4xl leading-tight">
              <span>The 3rd Australian Data Science Network Conference</span>
              <br />
              <span className="text-blue-900" style={{ fontSize: "37px" }}>
                ADSN Conference
              </span>
              <br />
              <span className="text-blue-900" style={{ fontSize: "37px" }}>
                2024
              </span>
            </h1>
            <p className="mb-4 font-semibold text-xl text-gray-700 ">
              Perth, Australia
            </p>
            <p className="mb-1 font-bold text-2xl tracking-wide text-gray-700 ">
              2 - 5 December, 2024
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
