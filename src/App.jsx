import NavBar from "./components/Navbar";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStacks from "./sections/TechStacks";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStacks />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
