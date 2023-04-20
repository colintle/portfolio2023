import React, { useState, useEffect } from "react";
import "../styles/globals.css";

import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <NavBar/>
        <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
