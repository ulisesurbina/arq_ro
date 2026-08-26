import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeBanner from "./components/MarqueeBanner";
import Overview from "./components/Overview";
import Gallery from "./components/Gallery";
import FeatureShowcase from "./components/FeatureShowcase";
import Distributions from "./components/Distributions";
import Units from "./components/Units";
import LocationMap from "./components/LocationMap";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <Overview />
        <Gallery />
        <Distributions />
        <FeatureShowcase />
        <Units />
        <LocationMap />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
