import React from 'react'
import { useInView } from 'react-intersection-observer';

function Projects() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <h1 className='text-5xl'>Projects</h1>
    </div>
  )
}

export default Projects