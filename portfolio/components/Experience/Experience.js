import {useState} from 'react'

import { EXPERIENCE_KEYS, EXPERIENCE_VALUES } from "@/data/Data"

function Experience() {
  const [tracker, setTracker] = useState({})
  return (
    <div className='md:h-screen flex justify-center'>
      <div className='w-3/4 md:w-1/2'>
          <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
            My Industry Experience
            <hr className='h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
          </h1>
          {/*This will be where the experience is going to be at*/}
          <div className='text-mg lg:text-lg xl:text-xl'>
            {/*View Component based on what the user clicks in the scroll bar*/}
            <div>

            </div>
            {/*Horizontal Scroll Bar*/}
            <div class="m-auto w-full overflow-auto">
              <div class="flex w-screen justify-between">
                {EXPERIENCE_KEYS.map((name, idx) => {
                  return (
                    <p key={idx}>
                      {name}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience