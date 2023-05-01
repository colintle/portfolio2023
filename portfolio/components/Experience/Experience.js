import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const scroller2 = useRef();
  const skills2 = useRef();

  useEffect(() => {
    let skillSet2 = gsap.utils.toArray('.skill2-set');

    let to = gsap.to(skillSet2, {
      xPercent: () => -100 * (skillSet2.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: scroller2.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        snap: 1 / (skillSet2.length - 1),

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
        id="skills2"
        ref={scroller2}
        className='flex overflow-x-hidden text-white bg-black w-[400vw] m-0 relative h-screen'
        >
          <div ref={skills2} className="skill2-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Experience</h1>
          </div>

          <div ref={skills2} className="skill2-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Experience</h1>
          </div>

          <div ref={skills2} className="skill2-set w-screen bg-transparent ns-horizontal-section__item">
            <h1 className='text-5xl'>Experience</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience