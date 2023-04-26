import { useEffect, useRef, useState } from "react";

import Background from "@/components/Particles/Background";
function Index() {
  return (
    <div>
      <div className="h-screen bg-red-100">
        <Background className=""/>
      </div>
      <div className="h-screen">
        <p>Hi</p>
      </div>
    </div>
  );
}

export default Index;
