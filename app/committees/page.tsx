import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Committees from "@/components/Committees";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <Committees />

      <Footer />
    </div>
  );
}
