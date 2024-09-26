import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Speakers from "@/components/Speakers";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />

            <Speakers />

            <Footer />
        </div>
    );
}
