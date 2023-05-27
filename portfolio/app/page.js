'use client'

import Hero from "@/components/Hero/Hero.js";
import About from "@/components/About/About.js";
import Projects from "@/components/Projects/Projects.js";
import Experience from "@/components/Experience/Experience.js";
import Footer from "@/components/Footer/Footer.js";
import Background from "@/components/Particles/Background";
import PopUp from "@/components/PopUp/PopUp";

import 'animate.css';
import "../styles/globals.css";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";

function Index() {
  const router = useRouter()

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div className="bg-black text-black">
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
