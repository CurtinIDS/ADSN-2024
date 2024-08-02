import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <LandingPage />
      <About />
      <KeyDates />

      {/* Coming Soon Section */}
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
              <p>Receive an alert up</p>
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
