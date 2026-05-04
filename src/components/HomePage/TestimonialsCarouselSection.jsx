import ScrollRevealWrapper from "../ScrollRevealWrapper";
import testimonialsBackgroundImage from "../../assets/homePageImages/PashutPastaImage04.jpg";

const TestimonialsCarouselSection = () => {
  const testimonials = [1, 2, 3, 4];

  return (
    <section
      id="testimonials-section"
      className="relative py-24 px-6 bg-cover bg-center"
      style={{backgroundImage: `url(${testimonialsBackgroundImage})`}}
    >
      {/* פילטר בהיר חזק כדי להבליט את הכרטיסיות */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center text-gray-900 underline decoration-orange-500/30 underline-offset-8">
          מה אנשים אומרים?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <ScrollRevealWrapper key={item}>
              <div
                id={`testimonial-card-${item}`}
                className="p-8 bg-white/90 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-orange-50 flex flex-col items-center text-center hover:shadow-orange-100 transition-all duration-300 h-full"
              >
                <div className="text-orange-500 text-4xl mb-4 font-serif leading-none">
                  “
                </div>
                <p className="text-gray-700 leading-relaxed italic mb-6">
                  כאן יבוא טקסט על פסטה וציטוט של לקוח שעבר את הסדנא ונהנה מאוד.
                </p>
                <div className="mt-auto w-10 h-1 bg-orange-200 rounded-full"></div>
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarouselSection;
