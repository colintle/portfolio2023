import Background from "@/components/Particles/Background";

import { useInView } from "react-intersection-observer"
import { useState } from "react";
import Link from "next/link";


function Hero() {
  const {ref, inView} = useInView({threshold:1.0})
  const [arrow, setArrow] = useState(false)

  return(
    <div ref={ref} className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
      {/* <p className="text-white">{inView ? "True" : "False"}</p> */}
      <div className="animate__animated animate__slideInDown animate__slow flex flex-col justify-center items-center">
        <p className="text-lg lg:text-xl xl:text-2xl">Hi, I'm</p>
        <h1
          className="font-extrabold text-transparent text-6xl lg:text-7xl xl:text-9xl bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 text-center"
        >
        Colin Le.
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl">Check out my AI Assistant!</p>
        {/* <Link href={"/bot"}>
          <button className="mt-8 bg-white rounded-2xl p-3 shadow-lg hover:-translate-y-1 transition-transform cursor-pointer flex">
            <p className="text-black shadow-lg">
              <strong>
                Talk to my AI Assistant
              </strong>
            </p>
            <div className="shadow-lg">
              <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700">
                  <i className="fa-solid fa-angles-right"></i>
              </span>
            </div>
          </button>
        </Link> */}
      </div>
      <div id="arrow" className={`${inView ? "" : "opacity-0"} invisible lg:visible text-4xl text-blue-500 absolute bottom-0 w-full flex flex-col justify-center items-center animate-bounce`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700">
          <i className="fa-solid fa-angles-down"></i>
        </span>
      </div>
      {/* <p className="text-white">{inView ? "True" : "False"}</p> */}
    </div>
  )
}

export default Hero;