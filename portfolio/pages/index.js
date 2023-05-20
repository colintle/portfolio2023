import Hero from "@/components/Hero/Hero.js";
import About from "@/components/About/About.js";
import Projects from "@/components/Projects/Projects.js";
import Experience from "@/components/Experience/Experience.js";
import Footer from "@/components/Footer/Footer.js";
import Background from "@/components/Particles/Background";

import 'animate.css';

function Index() {

  return (
    <div className="bg-white text-black">
        <Background/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default Index;
