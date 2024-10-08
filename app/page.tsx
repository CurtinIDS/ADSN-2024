import NavigationBar from "@/components/NavigationBar";
import LandingPage from "@/components/LandingPage";
import About from "@/components/About";
import KeyDates from "@/components/KeyDates";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import PreviousConferences from "@/components/PreviousConferences";
import EventSchedule from "@/components/EventSchedule";
import TicketCategories from "@/components/TicketCategories";

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
      <PreviousConferences />

      <Footer />
    </div>
  );
}
