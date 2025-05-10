import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};
