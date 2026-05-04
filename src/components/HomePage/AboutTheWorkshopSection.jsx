import ScrollRevealWrapper from "../ScrollRevealWrapper";
import pastaImage from "../../assets/homePageImages/PashutPastaImage01.jpg";

const AboutTheWorkshopSection = () => {
  // נתיב זמני לתמונה - החלף בנתיב האמיתי שלך
  const backgroundImageStyle = {
    backgroundImage: `url(${pastaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    // ה-Section קיבל רקע של תמונה עם overlaid לבן-שקוף
    <section
      id="about-the-workshop-section"
      className="relative py-24 px-6 overflow-hidden shadow-inner"
      style={backgroundImageStyle}
    >
      {/* פילטר בהיר (Overlay) כדי שהטקסט יהיה קריא */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollRevealWrapper>
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-950 underline decoration-orange-500/30 underline-offset-8">
            על הסדנא
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium bg-white/50 p-6 rounded-2xl shadow-sm">
            כאן יבוא טקסט על פסטה. כאן יבוא טקסט על פסטה. כאן יבוא טקסט על פסטה.
            כאן יבוא טקסט על פסטה. כאן יבוא טקסט על פסטה. כאן יבוא טקסט על פסטה.
          </p>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};

export default AboutTheWorkshopSection;
