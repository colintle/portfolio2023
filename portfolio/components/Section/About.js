import React from 'react'
import styles from "./styles.module.css"
import Image from 'next/image'
import picture from "../../public/images/me.jpg"

function About() {
  return (
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      <Image className={styles.image} src={picture} alt="profile picture" />
    </div>
    <div className={styles.textContainer}>
      <h2 className={styles.heading}>Colin Le</h2>
      <h4 className={styles.subheading}>Software Developer</h4>
    </div>
  </div>
  )
}

export default About