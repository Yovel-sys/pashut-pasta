import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationMenuBar from "./components/NavigationMenuBar";
import HomePageLandingScreen from "./pages/HomePageLandingScreen";
import EventsAndPromotionsPage from "./pages/EventsAndPromotionsPage";
import AboutMeBiographyPage from "./pages/AboutMeBiographyPage";
import ContactRegistrationFormPage from "./pages/ContactRegistrationFormPage";

function App() {
  return (
    <Router>
      <div dir="rtl" className="min-h-screen bg-white font-sans text-gray-900">
        <NavigationMenuBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePageLandingScreen />} />
            <Route path="/events" element={<EventsAndPromotionsPage />} />
            <Route path="/about" element={<AboutMeBiographyPage />} />
            <Route path="/contact" element={<ContactRegistrationFormPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
