import Hero from "@/components/Hero/Hero.js";
import About from "@/components/About/About.js";
import Projects from "@/components/Projects/Projects.js";
import Experience from "@/components/Experience/Experience.js";
import Footer from "@/components/Footer/Footer.js";
import Background from "@/components/Particles/Background";

import 'animate.css';
import PopUp from "@/components/PopUp/PopUp";

function Index() {

  return (
    <div className="bg-white text-black">
        <Background/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
        <PopUp/>
    </div>
  );
}

export default Index;
