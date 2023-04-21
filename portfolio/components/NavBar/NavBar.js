import React from 'react'
import Widget from '../Widget/Widget'

function NavBar() {
  return (
    <div className='backdrop-blur-sm bg-black/5 max-w-fit m-auto rounded-2xl sticky bottom-0 flex justify-center'>
      <div className='flex justify-between mx-6'>
        <Widget/>
        <Widget/>
      </div>
    </div>
  )

}

export default NavBar