import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUser, faCode } from '@fortawesome/free-solid-svg-icons';

function Widget() {
  return (
    <div class="flex items-center justify-center mx-3 my-3">
      <div class="relative rounded-xl shadow-2xl bg-gradient-to-b from-blue-400 to-blue-500 flex items-center justify-center h-12 w-12">
        <FontAwesomeIcon icon={faUser} className='text-white text-3xl drop-shawdow-2xl'/> 
      </div>
    </div>
  )
}

export default Widget