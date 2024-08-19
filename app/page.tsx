import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import PreviousConferences from "@/components/PreviousConferences";
import Committees from "@/components/Committees";
import EventSchedule from "@/components/EventSchedule";
import TicketCategories from "@/components/TicketCategories";
import Locations from "@/components/Locations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <LandingPage />
      <About />
      <KeyDates />
      <ComingSoon />
      <EventSchedule />
      <TicketCategories />
      <Locations />
      <Committees />
      <PreviousConferences />

      <Footer />
    </div>
  );
}
