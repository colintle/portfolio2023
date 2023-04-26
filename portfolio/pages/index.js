import { useEffect, useRef, useState } from "react";
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.NET.min'

function Index() {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xb66e2e,
        backgroundColor: 0x0,
        THREE: THREE,
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="bg-black">
      <div ref={myRef} className="container w-screen h-screen m-auto bg-black">
      </div>
    </div>
  );
}

export default Index;
