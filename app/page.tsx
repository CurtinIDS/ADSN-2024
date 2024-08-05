import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import PreviousConferences from "@/components/PreviousConferences";
import Committees from "@/components/Committees";
import ProgramOverview from "@/components/ProgramOverview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <LandingPage />
      <About />
      <KeyDates />
      <ComingSoon />
      <ProgramOverview />
      <Committees />
      <PreviousConferences />

      <Footer />
    </div>
  );
}
