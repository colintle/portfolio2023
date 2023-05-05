import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Experience from "@/components/Experience/Experience";

function Index() {

  return (
    <div className="bg-white text-black">
        <Hero/>
        <About/>
    </div>
  );
}

export default Index;
