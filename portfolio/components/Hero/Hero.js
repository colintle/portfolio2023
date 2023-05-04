import Image from "next/image";
import Picture from "../../public/images/me.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import Background from "@/components/Particles/Background";

function Hero() {
  return(
    <div className="h-screen relative">
      <Background/>
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
        <p className="text-mg lg:text-lg xl:text-xl">Hi, I'm</p>
        <h1
          className="font-extrabold text-transparent text-5xl lg:text-7xl xl:text-9xl bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 text-center"
        >
        Colin Le.
        </h1>
        <p className="text-mg lg:text-lg xl:text-xl">Learn more about me!</p>
        <div className="invisible md:visible text-4xl text-blue-500 absolute bottom-0 w-full flex flex-col justify-center items-center animate-bounce">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700">
          <i className="fa-solid fa-angles-down"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero;