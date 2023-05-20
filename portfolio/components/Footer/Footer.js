import Link from 'next/link'

function Footer() {
  return (
    <div className="h-52 text-sm flex justify-evenly items-center bg-black text-white py-10">
      <div className='h-full flex flex-col justify-between'>
        <a href="/files/resume.pdf" target="_blank" rel="noreferrer noopener">
          <h3 className='w-fit text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700'>
            Resume
            <hr className='h-0.5 mx-auto bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 border-0'></hr>
          </h3>
          </a>
        <a href="mailto:colintranle@knights.ucf.edu" target="_blank" rel="noreferrer noopener">
          <h3 className='w-fit text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700'>
            Email
            <hr className='h-0.5 mx-auto bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 border-0'></hr>
          </h3>
        </a>
        <a href="https://www.linkedin.com/in/colin-le-527a2321a/" target="_blank" rel="noreferrer noopener">
          <h3 className='w-fit text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700'>
            Linkedin
            <hr className='h-0.5 mx-auto bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 border-0'></hr>
          </h3>
        </a>
        <a href="https://github.com/colintle" target="_blank" rel="noreferrer noopener">
          <h3 className='w-fit text-transparent bg-clip-text bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700'>
            GitHub
            <hr className='h-0.5 mx-auto bg-gradient-to-b from-sky-600 via-sky-200 to-purple-700 border-0'></hr>
          </h3>
        </a>
      </div>
      <div className='h-full flex flex-col justify-between'>
        <p>Designed using NextJS and Tailwind CSS</p>
        <p>Copyright © 2023 Colin Le</p>
      </div>
    </div>
  )
}

export default Footer