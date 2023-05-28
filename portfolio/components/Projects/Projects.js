import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/data/Data'
import { useState } from 'react'
import { useInView, InView } from "react-intersection-observer"

function Projects() {
  const {ref, inView} = useInView({threshold:0.05, triggerOnce: true})
  const [values, setValues] = useState(new Array(PROJECTS.length).fill(true))

  const onChangeInView = (index) => {
    setValues((prevValues) => {
      const newValues = [...prevValues]; // Create a copy of the previous values array
      newValues[index] = !prevValues[index]; // Set the value at the given index to its opposite
      return newValues; // Return the updated values array
    });
  };
  
  

  const picture = (image) => {
    return (
      <div className='mt-8 md:w-1/2'>
        <Image
          src={image}
          width={1000}
          height={1000}
          className='rounded-xl shadow-xl hover:opacity-70'
        />
      </div>
    )
  }

  const description = (name, description, note, github, right) => {
    return (
      <div className='mt-12 md:w-1/2'>
        <h1 className='text-lg lg:text-xl xl:text-2xl mb-6'>{name}</h1>
        <p className='leading-7 mb-4'>
          {description}
        </p>
        <div className='align-bottom space-x-4'>
          {note && <p className='italic'>{note}</p>}
          {github && (
            <Link href={github} target="_blank">
              <div className={`hover:-translate-y-1 transition-transform cursor-pointer ${right ? "float-right" : ""}`}>
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700">
                  <i className="fa-brands fa-github"></i>
                </span> 
              </div>
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={`${inView ? "animate__animated animate__fadeIn animate__slow" : "opacity-0"} flex justify-center bg-white`}>
      <div className='w-3/4 md:w-1/2'>
        {/* <p className="text-black">{inView ? "True" : "False"}</p> */}
        <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
          Featured Projects
          <hr className='h-1 mx-auto my-2 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
        </h1>
        <div className='text-md lg:text-lg xl:text-xl flex flex-col space-y-28 my-5'>
          {
            PROJECTS.map((project, idx) => {
              return (
                <div key={idx}>
                  <InView threshold={0.3} onChange={() => onChangeInView(idx)} triggerOnce={true}>
                    {
                      idx % 2 == 0 && (
                        <div className={`${values[idx] ? "animate__animated animate__slideInUp" : "opacity-0"} flex flex-col md:flex-row md:space-x-12`}>
                          {/* <p className="text-black">{values[idx] ? "True" : "False"}</p> */}
                          {picture(project.image)}
                          {description(project.name, project.description, project?.note, project?.github, false)}
                          {/* <p className="text-black">{values[idx] ? "True" : "False"}</p> */}
                        </div>
                      )
                    }
                    {
                      idx % 2 == 1 && (
                        <div className={`${values[idx] ? "animate__animated animate__slideInUp" : "opacity-0"} flex flex-col md:flex-row md:space-x-12`}>
                          {/* <p className="text-black">{values[idx] ? "True" : "False"}</p> */}
                          {description(project.name, project.description, project?.note, project?.github, true)}
                          {picture(project.image)}
                          {/* <p className="text-black">{values[idx] ? "True" : "False"}</p> */}
                        </div>
                      )
                    }
                  </InView>
                </div>
              )
            })
          }
        </div>
        {/* <p className="text-black">{inView ? "True" : "False"}</p> */}
      </div>
    </div>
  )
}

export default Projects