import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

import Slide from './Slide'
import {ABOUT} from "../../data/Data";
import profile from "../../public/images/me.jpg"

function About() {
  const { ref, inView } = useInView();
  return(
    <div
    ref={ref}
    className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <div className='w-screen h-screen flex justify-center items-center bg-black'>
        <div className='grid lg:grid-cols-2 gap-3 md:grid-cols-1'>
          <div>

          </div>
          <div>
            <h1 className='text-5xl text-white'>Hi, I'm Colin</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About