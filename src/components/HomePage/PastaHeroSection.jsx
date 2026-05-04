// ייבוא התמונות מה-assets (שנה את השמות לשמות הקבצים שלך)
//import heroFirstImage from '../../assets/hero-pasta-1.jpg';
//import heroSecondImage from '../../assets/hero-pasta-2.jpg';
import pastaImage from "../../assets/homePageImages/PashutPastaImage05.jpg";

const PastaHeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-cover bg-center overflow-hidden"
      style={{backgroundImage: `url(${pastaImage})`}}
    >
      <div className="absolute inset-0 bg-white/60"></div>
      <div
        id="large-hero-logo"
        className="flex items-center gap-4 leading-none mb-16 transition-all duration-700 hover:rotate-1"
      >
        <span className="text-[140px] md:text-[200px] font-bold text-orange-600 drop-shadow-xl">
          פ
        </span>
        <div className="flex flex-col text-5xl md:text-7xl font-black text-gray-800 tracking-tighter italic">
          <span className="drop-shadow-sm">שוט</span>
          <span className="text-orange-900/80 drop-shadow-sm">סטה</span>
        </div>
      </div>

      <div
        id="hero-images-container"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl"
      >
        {/* תמונה ראשונה עם פילטר בהיר ב-Hover */}
        <div className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 bg-cover bg-center">
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-300"></div>
        </div>

        {/* תמונה שנייה עם פילטר בהיר ב-Hover */}
        <div className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 md:mt-12 bg-cover bg-center">
          <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default PastaHeroSection;
