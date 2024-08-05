import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function makeFirstLetterCapital (value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}