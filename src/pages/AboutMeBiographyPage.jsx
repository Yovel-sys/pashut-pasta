const AboutMeBiographyPage = () => {
  return (
    <div
      id="about-me-page-container"
      className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row-reverse gap-12 items-center"
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">קצת עלי</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          כאן יבוא טקסט על פסטה ועל בעל העסק. כאן יבוא טקסט על פסטה ועל בעל
          העסק. כאן יבוא טקסט על פסטה ועל בעל העסק.
        </p>
      </div>
      <div className="w-full md:w-1/2 aspect-square bg-gray-200 rounded-full flex items-center justify-center text-gray-400 shadow-inner">
        כאן תבוא תמונה של בעל העסק
      </div>
    </div>
  );
};

export default AboutMeBiographyPage;
