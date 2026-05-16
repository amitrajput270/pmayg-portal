import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks.jsx";
import DownloadAppSection from "../components/DownloadAppSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import SuccessStories from "../components/SuccessStories";
import AboutSection from "../components/AboutSection.jsx";
import InfoSection from "../components/InfoCards.jsx";
export default function HomePage() {
  return (
    <div className="bg-[#fff] overflow-hidden">
      <Navbar />
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <DownloadAppSection />
      <FaqSection />
      <SuccessStories />
      {/* <HowItWorks /> */}
      <Footer />
    </div>
  );
}
