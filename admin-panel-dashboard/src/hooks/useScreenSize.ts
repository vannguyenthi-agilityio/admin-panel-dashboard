import { useState, useEffect } from "react";

import { BREAKPOINTS } from "@/constants";

const getBreakPoint = (screenWidth: number) => {
  if (screenWidth) {
    if (screenWidth < BREAKPOINTS.XS) {
      return "xs";
    } else if (screenWidth < BREAKPOINTS.SM) {
      return "sm";
    } else if (screenWidth < BREAKPOINTS.MD) {
      return "md";
    } else if (screenWidth < BREAKPOINTS.LG) {
      return "lg";
    } else {
      return "xl";
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
