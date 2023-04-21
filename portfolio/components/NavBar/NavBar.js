import React from 'react'
import Widget from '../Widget/Widget'

function NavBar() {
  return (
    <div className='backdrop-blur-sm bg-white/30 w-5/6 m-auto rounded-lg sticky bottom-0 flex justify-center'>
      <div className='flex justify-between'>
        <Widget/>
        <Widget/>
      </div>
    </div>
  )

}

export default NavBar