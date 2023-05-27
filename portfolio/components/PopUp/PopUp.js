import {useState} from 'react'
import MiniBot from '../Bot/MiniBot'

function PopUp() {

    const [pop, setPop] = useState(false)

    return (
        <div className="resize absolute z-10 right-5 bottom-5">
            <button onClick={() => setPop(!pop)} className='fixed right-5 bottom-5 hover:-translate-y-1 transition-transform cursor-pointer animate-rotate'>
                <span className="bg-gradient-to-b from-sky-600 to-purple-700 h-10 w-10 text-md text-white rounded-lg flex justify-center items-center">
                  <i className="fa-solid fa-comment"></i>
                </span>
            </button>
            <div className={`fixed right-5 bottom-24 h-96 w-80 ${pop ? "animate-fade-in opacity-0" : "animate-fade-out opacity-1 pointer-events-none"}`}>
                <MiniBot/>
            </div>
        </div>
    )
}

export default PopUp