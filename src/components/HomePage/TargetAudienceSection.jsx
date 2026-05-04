// components/HomePage/TargetAudienceSection.jsx
import ScrollRevealWrapper from "../ScrollRevealWrapper";
import pastaImage from "../../assets/homePageImages/PashutPastaImage02.jpg";

const TargetAudienceSection = () => {
  // נתיב זמני לתמונה - החלף בנתיב האמיתי שלך
  const backgroundImageStyle = {
    backgroundImage: `url(${pastaImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="target-audience-section"
      className="relative py-24 px-6 overflow-hidden"
      style={backgroundImageStyle}
    >
      {/* פילטר בהיר (Overlay) - קצת יותר בהיר כאן כי זה רקע */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollRevealWrapper>
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-gray-950 underline decoration-orange-500/30 underline-offset-8">
            למי הסדנא מיועדת?
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium bg-white/40 p-6 rounded-2xl shadow-sm">
            כאן יבוא טקסט על פסטה ועל קהל היעד. כאן יבוא טקסט על פסטה ועל קהל
            היעד. כאן יבוא טקסט על פסטה ועל קהל היעד. כאן יבוא טקסט על פסטה ועל
            קהל היעד.
          </p>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
