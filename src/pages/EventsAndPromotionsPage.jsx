const EventsAndPromotionsPage = () => {
  return (
    <div id="events-page-container" className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-right">
        אירועים, פלאיירים והנחות
      </h1>
      <div
        id="events-grid-layout"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-orange-50 p-8 rounded-2xl shadow-sm border-2 border-dashed border-orange-200">
          <p className="text-xl text-gray-700">
            כאן יבוא טקסט על פסטה ומידע על אירועים קרובים.
          </p>
        </div>
        <div className="bg-orange-50 p-8 rounded-2xl shadow-sm border-2 border-dashed border-orange-200">
          <p className="text-xl text-gray-700">
            כאן יבוא טקסט על פסטה ומידע על הנחות מיוחדות.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsAndPromotionsPage;
