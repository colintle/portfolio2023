import {use, useState} from 'react'

function Slide({data}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div>
      <div className="relative h-full w-full">
        <div className="w-full bg-green-500"><p>{data && data.answer}</p></div>
        <div className="absolute top-0 left-0 bg-red-500 w-full transition duration-700 ease-out transform active:translate-x-full" onClick={handleOpen}><p>{data && data.key}</p></div>
      </div>
    </div>
    
  )
}

export default Slide