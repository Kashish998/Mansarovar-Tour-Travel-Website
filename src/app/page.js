// components
<<<<<<< HEAD
 import Hero from "./components/Hero";
=======
import Hero from "./components/Hero";
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
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
<<<<<<< HEAD
       <Services />
=======
      / <Services />
>>>>>>> 827b76d2b779c11277137b6cb34164097e9037ef
      <HomePackages />
  < Destinations/>
  <PackingChecklist />
    <GalleryGlimpse /> 
    <KailashMapSection />
    <TestimonialsSlider />
    </>
  );
}
