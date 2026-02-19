import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" makes it jump to top immediately
    // "smooth" makes it scroll up nicely (optional)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]); // Runs every time the route (pathname) changes

  return null;
};

export default ScrollToTop;