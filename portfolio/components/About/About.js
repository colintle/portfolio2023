import { useState } from 'react'
import Slide from './Slide'
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView();
  return(
    
    <div
    ref={ref}
    className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <h1 className='text-5xl'>About</h1>
      <Slide/>
    </div>
  )
}

export default About