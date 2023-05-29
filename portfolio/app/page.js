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
import { useEffect, useState } from "react";
import Modal from "react-modal";

function Index() {
  const router = useRouter()
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  useEffect(() => {
    setTimeout(() => {
      setFinished(true)
    }, 1000)
  }, [])

  return finished && (
    <div className="bg-black text-black font-sf">
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
