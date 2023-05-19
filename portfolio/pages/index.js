import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";

function Index() {

  return (
    <div className="bg-white text-black">
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
  );
}

export default Index;
