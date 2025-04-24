import About from "./Home/About";
import Banner from "./Home/Banner";
import Cta from "./Home/Cta";
import Footer from "./Home/Footer";
import Hero from "./Home/Hero";
import Recent from "./Home/Recent";
import Service from "./Home/Service";
import Work from "./Home/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Banner />
      <About />
      <Service />
      <Work />
      <Recent/>
      <Cta/>
      <Footer/>
    </>
  );
}
