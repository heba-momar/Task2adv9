
import { useEffect, useState } from "react"
import './App.css'
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from './Components/ScrollTop/ScrollTop'
import Loder from './Components/Loder/Loder'
import NavbarTop from './Components/NavbarTop/NavbarTop'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import OurBenefits from './Components/Our Benefits/OurBenefits'
import OurTestimonials from './Components/OurTestimonials/OurTestimonials'
import FqaSection from './Components/FqaSection/FqaSection'
import Navigate  from './Components/Navigate/Navigate';
import Footer from './Components/Footer/Footer'

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: '50px',
      once: false,
      mirror: true
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loder />;
  return (
    <>

      <NavbarTop/>
      <Navbar/>
      <Hero span={'Welcome to Little Learners Academy'}
      TittelHero={'Where Young Minds Blossom and  '}
      tittelspan={'Dreams Take Flight.'}
      desHero={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'}
      />
      <OurBenefits/>
      <OurTestimonials/>
      <FqaSection/>
      <Navigate/>
      <Footer TextFooter={'We believe in the power of play to foster creativity, problem-solving skills, and imagination.'}/>
        <ScrollTop/>
    </>
  )
}

export default App
