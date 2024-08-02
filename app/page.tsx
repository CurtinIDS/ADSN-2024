import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";
import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <LandingPage />
      <About />
      <KeyDates />
      <ComingSoon />

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Timer App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
