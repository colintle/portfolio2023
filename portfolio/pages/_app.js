import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Component {...pageProps} />
};

export default MyApp;