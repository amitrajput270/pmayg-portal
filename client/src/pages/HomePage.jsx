import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks.jsx";
import DownloadAppSection from "../components/DownloadAppSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import SuccessStories from "../components/SuccessStories";
import AboutSection from "../components/AboutSection.jsx";
export default function HomePage() {
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <DownloadAppSection />
      <FaqSection />
      <SuccessStories />
      <Footer />
    </div>
  );
}
