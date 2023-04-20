import React, { useState, useEffect } from "react";
import "../styles/globals.css";

import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2500);
  }, []);

  return (
    <div>
      {showSplash && (
        <div>
          <h1>Hello, World</h1>
        </div>
      )}
      {!showSplash && 
      <div>
        <NavBar/>
        <Component {...pageProps} />
      </div>}
    </div>
  );
}

export default MyApp;
