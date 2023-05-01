import Image from "next/image";
import Picture from "../../public/images/me.jpg"

import Background from "@/components/Particles/Background";

function About() {
  return(
    <div className="h-screen relative">
      <Background/>
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <p className="text-xl">Hi, I'm</p>
        <h1
          className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700"
        >
        Colin Le.
        </h1>
        <p className="text-xl">Learn more about me!</p>
        <div>
          <p>Socials Here</p>
        </div>
      </div>
    </div>
  )
}

export default About