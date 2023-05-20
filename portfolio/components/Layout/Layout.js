import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
        window.location.reload()
        window.scrollTo(0, 0);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return <div>{children}</div>;
};

export default Layout;
