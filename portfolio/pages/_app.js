import React, { useState, useEffect } from "react";
import "../styles/globals.css";

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
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <Component {...pageProps} />
      </div>}
    </div>
  );
}

export default MyApp;
