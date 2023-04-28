import { useEffect, useRef, useState } from "react";

import Background from "@/components/Particles/Background";
function Index() {
  return (
    <div>
      <div className="h-screen relative">
        <Background className=""/>
        <div class="absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 class="text-black text-4xl font-bold">My content</h1>
        </div>
      </div>
      <div className="h-screen">
        <p>Rest of app</p>
      </div>
    </div>
  );
}

export default Index;
