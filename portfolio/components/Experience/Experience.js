import {useState} from 'react'

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

// const listMaker = (list) => {
//   return (
//     <ul className="list-disc ml-4">
//       {list.map((description, index) => {
//         return (
//           <li key={index} className="ml-4">
//             {Array.isArray(description) ? listMaker(description) : description}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };


function Experience() {
  const [tracker, setTracker] = useState(EXPERIENCE["WEAR Lab"])

  return (
    <div className='sm:h-fit md:h-screen flex justify-center'>
      <div className='w-3/4 md:w-1/2'>
          <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
            My Industry Experience
            <hr className='h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
          </h1>
          {/*This will be where the experience is going to be at*/}
          <div className='text-mg lg:text-lg xl:text-xl h-3/4'>
            {/*Horizontal Scroll Bar*/}
            <div class="m-auto w-full overflow-auto py-6">
              <div class="flex w-screen justify-between">
                {Object.keys(EXPERIENCE).map((name, idx) => {
                  return (
                    <p key={idx}>
                      {name}
                    </p>
                  )
                })}
              </div>
            </div>
            {/*View Component based on what the user clicks in the scroll bar*/}
            <div className='h-full flex flex-col py-6'>
              <div className='py-1'>
                {tracker.name}
              </div>
              <div className='py-1'>
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