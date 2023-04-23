import React from 'react'
import Widget from '../Widget/Widget'
import {NAV} from "../../data/Nav";

function NavBar() {
  return (
    <div className='backdrop-blur-sm bg-black/5 max-w-fit m-auto rounded-2xl sticky bottom-5 flex justify-center'>
      <div className='flex justify-between mx-6'>
        {
          NAV && NAV.map((element) => (<Widget icon={element}/>))
        }
      </div>
    </div>
  )

}

export default NavBar