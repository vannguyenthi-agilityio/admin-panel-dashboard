import { useState, useEffect } from "react";

import { BREAKPOINTS, SCREEN_SIZE } from "@/constants";

const getBreakPoint = (screenWidth: number) => {
  if (screenWidth) {
    if (screenWidth < BREAKPOINTS.XS) {
      return SCREEN_SIZE.XS;
    } else if (screenWidth < BREAKPOINTS.SM) {
      return SCREEN_SIZE.SM;
    } else if (screenWidth < BREAKPOINTS.MD) {
      return SCREEN_SIZE.MD;
    } else if (screenWidth < BREAKPOINTS.LG) {
      return SCREEN_SIZE.LG;
    } else {
      return SCREEN_SIZE.XL;
    }
  } else {
    return undefined;
  }
}

const useScreenSize = () => {
  const isScreenClient = typeof window === "object";

  const [screenSize, setScreenSize] = useState(
    isScreenClient
      ? getBreakPoint(window.innerWidth)
      : undefined
  );

  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setScreenSize(getBreakPoint(window.innerWidth));
    }

    if (isScreenClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isScreenClient, setScreenSize]);

  return screenSize;
}

export default useScreenSize;
