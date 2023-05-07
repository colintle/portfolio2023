import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Projects() {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4 md:w-1/2'>
        <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
          Featured Projects
          <hr className='w- h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
        </h1>
        <div className='text-mg lg:text-lg xl:text-xl flex flex-col space-y-28'>
          {
            PROJECTS.map((project, idx) => {
              return (
                <div key={idx}>
                  <div className='flex flex-col md:flex-row md:space-x-12'>
                    <div className='mt-8 md:w-1/2'>
                      <Image
                        src={project.image}
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    </div>
                    <div className='mt-12 md:w-1/2'>
                      <h1 className='text-lg lg:text-xl xl:text-2xl mb-6'>{project.name}</h1>
                      <p className='leading-7 mb-4'>
                        {project.description}
                      </p>
                      <div className='align-bottom space-x-4'>
                        {project?.note && <p className='italic'>{project.note}</p>}
                        {project?.github && (
                          <Link href={project.github} target="_blank" >
                            <FontAwesomeIcon icon={faGithub} className='hover:-translate-y-1 transition-transform cursor-pointer text-3xl'/>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects