import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/data/Data'

function Projects() {

  // const [seeMore, setSeeMore] = useState(false)
  // const [currProjects, setCurrProjects] = useState([PROJECTS[0], PROJECTS[1]])

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
    <div className='flex justify-center'>
      <div className='w-3/4 md:w-1/2'>
        <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
          Featured Projects
          <hr className='h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
        </h1>
        <div className='text-mg lg:text-lg xl:text-xl flex flex-col space-y-28 my-5'>
          {
            PROJECTS.map((project, idx) => {
              return (
                <div key={idx}>
                  {
                    idx % 2 == 0 && (
                      <div className='flex flex-col md:flex-row md:space-x-12'>
                        {picture(project.image)}
                        {description(project.name, project.description, project?.note, project?.github, false)}
                      </div>
                    )
                  }
                  {
                    idx % 2 == 1 && (
                      <div className='flex flex-col md:flex-row md:space-x-12'>
                        {description(project.name, project.description, project?.note, project?.github, true)}
                        {picture(project.image)}
                      </div>
                    )
                  }
                </div>
              )
            })
          }
        </div>
        {/* <div className='w-fit m-auto bg-gradient-to-b from-sky-600 to-purple-700 p-1 rounded-md shawdow-xl hover:-translate-y-1 transition-transform cursor-pointer my-5'>
          <div class=" h-full w-full bg-white rounded-sm px-2">
            <button onClick={handleSeeMore}>
              {seeMore ? "See Less" : "See More"}
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Projects