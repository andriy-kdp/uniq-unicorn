import { EventHandler, useCallback, useEffect, useState } from "react";
import { media } from "../theme/global";

export function useMediaQuery(mediaQuery: "xs"): boolean {
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
