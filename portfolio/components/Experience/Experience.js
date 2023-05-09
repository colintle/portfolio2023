function Experience() {
  return (
    <div className='md:h-screen flex justify-center items-center'>
      <div className='w-3/4 md:w-1/2'>
          <h1 className='w-fit m-auto text-2xl lg:text-3xl xl:text-4xl text-center my-5'>
            My Industry Experience
            <hr className='w- h-1 mx-auto my-4 bg-gradient-to-b from-sky-600 to-purple-700 border-0 rounded'></hr>
          </h1>
          {/*This will be where the experience is going to be at*/}
          <div className='text-mg lg:text-lg xl:text-xl'>
              <p className='py-2'>I am a rising Junior at the University of Central Florida, double majoring in Computer Science and Statistics. My interest in coding started in high school when I first saw <i>The Social Network</i> directed by David Fincher.</p>
              <p className='py-2'>Jump to present day, I have had the opportunity as a Software Engineer Intern to gain valuable experience and contribute to the development of software products at several different organizations including 
                  <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700'> J.P. Morgan</strong>, 
                  <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700'> the University of Central Florida</strong>, 
                  <strong className='text-transparent bg-clip-text bg-gradient-to-b from-sky-600 to-purple-700'> Lockheed Martin</strong>, 
              and many more.</p>
              <p className='py-2'>Outside of school and work, I prioritize self-improvement as a crucial aspect of my personal life through mediums such as reading books, working out, and learning new technologies.</p>
          </div>
        </div>
    </div>
  )
}

export default Experience