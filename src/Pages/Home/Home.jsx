import About from "../../Components/About/About";
import HowItWorks from "../../Components/HowItWorks/HowItWorks";
import Slider from "../../Components/Slider/Slider";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Volunteer from "../../Components/Volunteer/Volunteer";

export default function Home() {
  
  return (
    <>
        <Slider  />
        <About />
        <HowItWorks />
        <Testimonials />
        <Volunteer />
    </>
  )
}
