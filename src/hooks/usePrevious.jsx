import { useEffect, useRef } from "react";

export const usePrevious = (currentValue) => {
  const previousValue = useRef(0);
  useEffect(() => {
    previousValue.current = currentValue;
  }, [currentValue]);
  return previousValue.current;
};

export default usePrevious;
