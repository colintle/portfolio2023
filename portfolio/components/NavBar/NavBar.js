import React from 'react'
import styles from './styles.module.css'
import { faHouse, faUser, faCode, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavBar() {
  return (
    <div className={styles.navbar}>
        <a title="Menu"><FontAwesomeIcon icon={faBars} /></a>
        <div className={styles.dropdown}>
            <a href="#" title="Home"><FontAwesomeIcon icon={faHouse} /></a>
            <a href="#" title="About Me"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#" title="Projects"><FontAwesomeIcon icon={faCode} /></a>
        </div>
    </div>
  )
}

export default NavBar