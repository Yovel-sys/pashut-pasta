import ScrollRevealWrapper from "../ScrollRevealWrapper";
import pastaImage from "../../assets/homePageImages/PashutPastaImage03.jpg";

const ClosingCallToActionSection = () => {
  // נתיב זמני לתמונה - החלף בנתיב האמיתי שלך
  const backgroundImageStyle = {
    backgroundImage: `url(${pastaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="closing-section"
      className="relative py-28 px-6 overflow-hidden"
      style={backgroundImageStyle}
    >
      {/* פילטר בהיר מאוד (Overlay) */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollRevealWrapper>
          <h3 className="text-4xl md:text-6xl font-black mb-6 text-gray-950 leading-tight">
            כאן יבוא כיתוב סיום כלשהו
          </h3>
          <p className="text-xl md:text-2xl text-orange-950/80 mb-10 font-medium">
            כאן יבוא טקסט קצר ומניע לפעולה על פסטה. מוכנים להתחיל לבשל?
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300"
          >
            להשארת פרטים ותיאום סדנא
          </a>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};

export default ClosingCallToActionSection;
