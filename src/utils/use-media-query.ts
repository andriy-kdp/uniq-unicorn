import { useCallback, useEffect, useState } from "react";

export const media = {
  xs: "max-width: 37rem",
  sm: "max-width: 50rem",
  md: "max-width: 70rem",
  lg: "max-width: 90rem",
  xl: "max-width: 114rem",
};

export function useMediaQuery(mediaQuery: keyof typeof media): boolean {
  const [matched, setMatched] = useState<boolean>(false);

  const getMediaQueryString = useCallback(() => {
    return `(${media[mediaQuery]})`;
  }, []);

  const getMatches = useCallback((query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const handleChange = (query: string) => {
    const matched = getMatches(query);
    setMatched(matched);
  };

  useEffect(() => {
    const query = getMediaQueryString();
    const windowEvent = window.matchMedia(query);
    handleChange(query);
    windowEvent.addEventListener("change", () => handleChange(query));
    document.addEventListener("load", () => handleChange(query));
    return () => {
      windowEvent.removeEventListener("change", () => handleChange(query));
      window.removeEventListener("load", () => handleChange(query));
    };
  }, []);

  return matched;
}
