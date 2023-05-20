import { EXPERIENCE } from "@/data/Data"

import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer"

const listMaker = (list, index) => {
  return (
    <ul key={index} className='list-disc ml-6'>
      {list.map((description, index) => {
        if (Array.isArray(description)){
          return listMaker(description, index)
        }
        else{
          return <li key={index}>{description}</li>
        }
      })}
    </ul>
  );
};

function Experience() {
  const [tracker, setTracker] = useState(EXPERIENCE["J.P. Morgan & Chase"])
  const {ref, inView} = useInView({threshold:0.25, triggerOnce: true})
  const menuRef = useRef(null);

  const handleTracker = (e) => {
    const value = e.target.value;
    setTracker(EXPERIENCE[value]);

    const item = e.target;
    const menu = menuRef.current;
    const menuWidth = menu.offsetWidth;
    const itemOffsetLeft = item.offsetLeft;
    const itemWidth = item.offsetWidth;
    const scrollLeft = itemOffsetLeft - ((menuWidth - itemWidth) * 1.25);

    menu.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  }

  return (
    <div ref={ref} className={`${inView ? "animate__animated animate__fadeIn animate__slow" : "opacity-0"} min-h-screen flex justify-center text-white bg-black`}>
      <div className='w-3/4 md:w-1/2 flex flex-col'>
        {/* <p className="text-white">{inView ? "True" : "False"}</p> */}
          <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
            <strong className='text-transparent text-white'>My Industry Experience</strong>
            <hr className='h-1 mx-auto my-2 bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 border-0 rounded'></hr>
          </h1>
          {/*This will be where the experience is going to be at*/}
          <div className='text-mg lg:text-lg xl:text-xl flex flex-col flex-grow'>
            {/*Horizontal Scroll Bar*/}
            <div ref={menuRef} id="horizontal" className="text-neutral-500 m-auto w-full overflow-auto mb-4">
              <div className="flex w-screen justify-between">
                {Object.keys(EXPERIENCE).map((name, idx) => {
                  return (
                    <button key={idx} value={name} onClick={handleTracker} className='hover:-translate-y-1 transition-transform cursor-pointer'>
                      {name}
                    </button>
                  )
                })}
              </div>
            </div>
            {/*View Component based on what the user clicks in the scroll bar*/}
            <div className='flex flex-col flex-grow'>
              <div className='py-1 text-lg lg:text-xl xl:text-2xl mb-4'>
                <strong>{tracker.name}</strong>
              </div>
              <div className='mb-4'>
                <h3><strong>{tracker.duration}</strong></h3>
                <div className='text-sm'>{listMaker(tracker.description)}</div>
              </div>
            </div>
          </div>
        {/* <p className="text-white">{inView ? "True" : "False"}</p> */}
      </div>
    </div>
  )
}

export default Experience