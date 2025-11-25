import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Lawyers from "../components/Lawyers";
import PracticeAreas from "../components/PracticeAreas";
import Mission from "../components/Mission";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="w-full overflow-x-hidden bg-brand-light min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <About />
        <Lawyers />
        <PracticeAreas />
        <Mission />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
