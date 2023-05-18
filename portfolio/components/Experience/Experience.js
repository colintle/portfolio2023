import {useState, useEffect} from 'react'

import { EXPERIENCE } from "@/data/Data"

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
  const [tracker, setTracker] = useState(EXPERIENCE["WEAR Lab"])

  const handleTracker = (e) => {
    const value = e.target.value; // The value is already a string
    setTracker(EXPERIENCE[value]);
    console.log(tracker)
  }

  return (
    <div className='min-h-screen flex justify-center'>
      <div className='w-3/4 md:w-1/2 flex flex-col'>
          <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
            My Industry Experience
            <hr className='h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
          </h1>
          {/*This will be where the experience is going to be at*/}
          <div className='text-mg lg:text-lg xl:text-xl flex flex-col flex-grow'>
            {/*Horizontal Scroll Bar*/}
            <div class="m-auto w-full overflow-auto">
              <div class="flex w-screen justify-between">
                {Object.keys(EXPERIENCE).map((name, idx) => {
                  return (
                    <button key={idx} value={name} onClick={handleTracker}>
                      {name}
                    </button>
                  )
                })}
              </div>
            </div>
            {/*View Component based on what the user clicks in the scroll bar*/}
            <div className='flex flex-col flex-grow'>
              <div className='py-1'>
                {tracker.name}
              </div>
              <div>
                <p>{tracker.duration}</p>
                <div className='text-sm'>{listMaker(tracker.description)}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience