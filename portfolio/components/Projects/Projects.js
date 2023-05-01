import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const scroller = useRef();
  const skills = useRef();

  useEffect(() => {
    let skillSet = gsap.utils.toArray('.skill-set');

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet.length - 1),

        end: () => '+=' + window.innerWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);


  return (
    <div className='overflow-hidden flex'>
      <div className='overflow-hidden'>
        <div
        id="skills"
        ref={scroller}
        className='flex overflow-x-hidden text-white bg-black w-[400vw] m-0 relative h-screen'
        >
          <div ref={skills} className="skill-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Projects</h1>
          </div>

          <div ref={skills} className="skill-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Projects</h1>
          </div>

          <div ref={skills} className="skill-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Projects</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects