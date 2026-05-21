import Navbar from "@components/Navbar";
import DownloadAppSection from "@components/DownloadAppSection";
import FaqSection from "@components/FaqSection";
import Footer from "@components/Footer";
import SuccessStories from "@components/SuccessStories";
import AboutSection from "@components/AboutSection.jsx";
import InfoSection from "@components/InfoCards.jsx";
export default function HomePage() {
  return (
    <div className="bg-[#fff] overflow-hidden">
      <Navbar />
      <InfoSection />
      <AboutSection />
      <DownloadAppSection />
      <FaqSection />
      <SuccessStories />
      <Footer />
    </div>
  );
}
