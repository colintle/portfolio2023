import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faUser, faCode } from '@fortawesome/free-solid-svg-icons';

function Widget() {
  return (
    <div className=''>
        <div className='mx-4 my-0.5'>
            <div className='rounded-lg bg-red-500 p-3 flex justify-center'>
                <FontAwesomeIcon icon={faHouse} className='text-white'/> 
            </div>
        </div>
        <p className='text-center'>Home</p>
    </div>
  )
}

export default Widget