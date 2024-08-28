import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Sponsorship from "@/components/Sponsorship";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <Sponsorship />

      <Footer />
    </div>
  );
}