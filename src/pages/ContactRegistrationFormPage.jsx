const ContactRegistrationFormPage = () => {
  return (
    <div id="contact-page-container" className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">להשארת פרטים</h1>
      <form
        id="lead-capture-form"
        className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium">שם מלא</label>
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">טלפון</label>
          <input
            type="tel"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium">הודעה (אופציונלי)</label>
          <textarea className="border border-gray-300 p-3 rounded-lg h-32 focus:ring-2 focus:ring-orange-500 outline-none"></textarea>
        </div>
        <button
          type="submit"
          className="bg-orange-600 text-white font-bold py-4 rounded-lg hover:bg-orange-700 transition-colors"
        >
          שליחת פרטים
        </button>
      </form>
    </div>
  );
};

export default ContactRegistrationFormPage;
