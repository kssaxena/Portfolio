import { useEffect, useRef } from "react";

export function truncateString(str, length) {
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}

export function truncateNumber(number, length) {
  const str = number.toString();
  if (str.length > length) {
    return str.slice(0, length) + "...";
  }
  return str;
}


export const useDebounce = (callback, delay) => {
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current); // Cleanup timeout on unmount
  }, []);

  return (...args) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // Reset timer on new call
    }
    timerRef.current = setTimeout(() => {
      callback(...args); // Execute callback after delay
    }, delay);
  };
};
