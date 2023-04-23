import {use, useState} from 'react'

function Slide() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="relative">
    <div className="w-full bg-green-500"><p>Hello world</p></div>
    <div className="absolute top-0 left-0 bg-red-500 w-full transition duration-700 ease-out transform active:-translate-x-full" onClick={handleOpen}><p>22222222</p></div>
    </div>
    
  )
}

export default Slide