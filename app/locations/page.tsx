import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Locations from "@/components/Locations";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <Locations />

      <Footer />
    </div>
  );
}
