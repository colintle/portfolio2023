import {useState} from 'react'
import Bot from '../Bot/Bot'

function PopUp() {

    const [pop, setPop] = useState(false)

    return (
        <div className="resize absolute z-10 right-5 bottom-5 text-red-500">
            <button onClick={() => setPop(!pop)} className='fixed right-5 bottom-5'>
                Fixed
            </button>
            {
                pop && 
                <div className='fixed right-5 bottom-16 text-red-500 bg-white h-60'>
                </div>
            }
        </div>
    )
}

export default PopUp