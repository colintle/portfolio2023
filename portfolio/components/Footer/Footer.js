import React from 'react'
import { useInView } from 'react-intersection-observer';

function Footer() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ease-in-out ${inView ? 'opacity-1' : 'opacity-0'}`}
    >
      <h1 className='text-5xl'>Footer</h1>
    </div>
  )
}

export default Footer