import Hero from "../components/Hero";
import MarqueeBanner from "../components/MarqueeBanner";
import Overview from "../components/Overview";
import Gallery from "../components/Gallery";
import FeatureShowcase from "../components/FeatureShowcase";
import Distributions from "../components/Distributions";
import Units from "../components/Units";
import LocationMap from "../components/LocationMap";
import AboutTeaser from "../components/AboutTeaser";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <MarqueeBanner />
      <Overview />
      <Gallery />
      <FeatureShowcase />
      <Distributions />
      <Units />
      <LocationMap />
      <ContactSection />
    </>
  );
}