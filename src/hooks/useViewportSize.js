import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

export const useViewportSize = () => {
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const t = useMediaQuery("(min-width:768px)");
  const d = useMediaQuery("(min-width:1280px)");

  useEffect(() => {
    setIsTablet(t);
    setIsDesktop(d);
  }, [t, d]);

  return {
    isTablet,
    isDesktop,
  };
};
