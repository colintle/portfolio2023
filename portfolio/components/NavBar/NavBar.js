import React from 'react'
import Widget from '../Widget/Widget'
import {NAV} from "../../data/Data";

function NavBar() {
  return (
    <div className='backdrop-blur-sm bg-black/5 max-w-fit m-auto rounded-2xl sticky bottom-5 flex justify-center'>
      <div className='flex justify-between mx-6'>
        {
          NAV && NAV.map((element, i) => (<Widget icon={element} key={i}/>))
        }
      </div>
    </div>
  )

}

export default NavBar