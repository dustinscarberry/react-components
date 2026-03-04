import { useState, useEffect } from 'react';

export const useDebounce = (func, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(func); // State to store the debounced value

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(func);
    }, delay);

    // Cleanup function: cancel the previous timer if the value changes before the delay
    return () => {
      clearTimeout(handler);
    };
  }, [func, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
}

export default useDebounce;