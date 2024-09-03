import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ComingSoonPage from "@/components/ComingSoonPage";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationBar />

            <ComingSoonPage />

            <Footer />
        </div>
    );
}
