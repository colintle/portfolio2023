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
      <h1 className='text-5xl'>About</h1>
      <div className="flex w-full h-full">
        <div className="shrink-0">
          <div className='overflow-hidden'>
            <Image src={profile}></Image>
          </div>
        </div>
        <div className='grid grid-cols-1 content-between bg-green-400'>
          {
             ABOUT && ABOUT.map((element, i) => (<Slide data={element} key={i}/>))
          }
        </div>
      </div>
    </div>
  )
}

export default About