import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import picture from "../../public/images/me.jpg"

function About() {
  const [roles, setRoles] = useState(['Software Developer', 'UI/UX Designer', 'Full-Stack Developer'])
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex(currentRoleIndex => (currentRoleIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <div>
        <Image src={picture} alt="profile picture" />
      </div>
      <div>
        <h2>Colin Le</h2>
        <h4>{roles[currentRoleIndex]}</h4>
      </div>
    </div>
  )
}

export default About