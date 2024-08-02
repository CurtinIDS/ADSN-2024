import Image from "next/image";
import NavigationBar from "./navigationbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      {/* Landing Page */}
      <div className="relative flex justify-center flex-grow">
        <div className="relative flex flex-col h-[calc(100vh-64px)] w-full">
          <div className="relative flex-grow">
            <Image
              aria-hidden="true"
              data-placeholder-image=""
              className="object-cover w-full h-full"
              src="/ADSN-2024/perth_skyline.webp"
              layout="fill"
              alt="Perth Skyline"
            />
            <div className="absolute right-40 top-0 bg-[#e6e4dc] bg-opacity-85 pl-11 pr-4 py-8 rounded-b-xl shadow-lg w-[350px]">
              <h1 className="mb-2 relative text-gray-700 font-extrabold tracking-wide text-4xl leading-tight">
                <span>The 3rd Australian Data Science Network Conference</span>
                <br />
                <span className="text-blue-900 text-[37px]">
                  ADSN Conference
                </span>
                <br />
                <span className="text-blue-900 text-[37px]">2024</span>
              </h1>
              <p className="mb-4 font-semibold text-xl text-gray-700">
                Perth, Australia
              </p>
              <p className="mb-1 font-bold text-2xl tracking-wide text-gray-700">
                2 - 5 December, 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Precise Timing</h3>
            <p>
              Our timer provides accurate measurements for all your timing
              needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Multiple Timers</h3>
            <p>
              Set and manage multiple timers simultaneously for complex tasks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Custom Alerts</h3>
            <p>Customize audio and visual alerts to suit your preferences.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="text-center mb-8 md:mb-0">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Set Timer</h3>
              <p>Choose your desired duration</p>
            </div>
            <div className="text-center mb-8 md:mb-0">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Start Timer</h3>
              <p>Begin the countdown</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Get Notified</h3>
              <p>Receive an alert when time's up</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Timer App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
