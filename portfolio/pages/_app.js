import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { faHouse, faUser, faCode, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function MyApp({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      {showSplash && (
        <div className="splash-screen">
          <h1>Hello, World</h1>
        </div>
      )}
      {!showSplash && 
      <div className="content">
        <div class="navbar">
          <a title="Menu"><FontAwesomeIcon icon={faBars} /></a>
          <div class="dropdown">
            <a href="#" title="Home"><FontAwesomeIcon icon={faHouse} /></a>
            <a href="#" title="About Me"><FontAwesomeIcon icon={faUser} /></a>
            <a href="#" title="Projects"><FontAwesomeIcon icon={faCode} /></a>
          </div>
        </div>
        <Component {...pageProps} />
      </div>}
    </div>
  );
}

export default MyApp;
