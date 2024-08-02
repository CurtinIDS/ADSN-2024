import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <LandingPage />
      <About />
      <KeyDates />
      <ComingSoon />

      <Footer />
    </div>
  );
}
