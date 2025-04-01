// components
 import Hero from "./components/Hero";
import Destinations from "./components/Destination"; // Only import once
  import HomePackages from "./components/PackagesP";
// // import TestimonialSlider from "./components/Services";  
  import GalleryGlimpse from "./components/Gallery";
 import PackingChecklist  from "./components/ListGenerater";
 import Services from "./components/OurServices";
// import TestimonialSlider from "./components/Services";
import KailashMapSection from "./components/MapKailash";
import TestimonialsSlider from "./components/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <Hero />
       <Services />
      <HomePackages />
  < Destinations/>
  <PackingChecklist />
    <GalleryGlimpse /> 
    <KailashMapSection />
    <TestimonialsSlider />
    </>
  );
}
