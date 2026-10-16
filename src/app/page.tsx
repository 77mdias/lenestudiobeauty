import Hero from "../components/UI/Hero/Hero";
import Stats from "../components/UI/Stats/Stats";
import Services from "../components/UI/Services/Services";
import Transformations from "../components/UI/Transformations/Transformations";
import Gallery from "../components/UI/Gallery/Gallery";
import About from "../components/UI/About/About";
import Feedback from "../components/UI/Feedback/Feedback";
import Contact from "../components/UI/Contact/Contact";
import CtaBanner from "../components/UI/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Transformations />
      <Gallery />
      <About />
      <Feedback />
      <Contact />
      <CtaBanner />
    </>
  );
}
