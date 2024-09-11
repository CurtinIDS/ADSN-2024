import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Accommodation from "@/components/Accommodation";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />

            <Accommodation />

            <Footer />
        </div>
    );
}
