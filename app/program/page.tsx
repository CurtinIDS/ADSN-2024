import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Program from "@/components/Program";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />

      <Program />

      <Footer />
    </div>
  );
}
