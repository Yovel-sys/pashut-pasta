import SectionDividerLine from "../components/SectionDividerLine"; // ייבוא הקומפוננטה החדשה
import PastaHeroSection from "../components/HomePage/PastaHeroSection";
import AboutTheWorkshopSection from "../components/HomePage/AboutTheWorkshopSection";
import TargetAudienceSection from "../components/HomePage/TargetAudienceSection";
import TestimonialsCarouselSection from "../components/HomePage/TestimonialsCarouselSection";
import ClosingCallToActionSection from "../components/HomePage/ClosingCallToActionSection";

const HomePageLandingScreen = () => {
  return (
    <div
      id="landing-page-container"
      className="flex flex-col w-full overflow-x-hidden bg-white"
    >
      <PastaHeroSection />
      <SectionDividerLine /> {/* הפרדה אחרי ה-Hero */}
      <AboutTheWorkshopSection />
      <SectionDividerLine /> {/* הפרדה אחרי 'על הסדנא' */}
      <TargetAudienceSection />
      <SectionDividerLine /> {/* הפרדה אחרי 'למי זה מיועד' */}
      <TestimonialsCarouselSection />
      <SectionDividerLine /> {/* הפרדה אחרונה לפני הסיום */}
      <ClosingCallToActionSection />
    </div>
  );
};

export default HomePageLandingScreen;
