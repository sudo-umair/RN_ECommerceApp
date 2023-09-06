import {useEffect, useState} from 'react';

const useDebounceValue = (value: string, time: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), time);
    return () => clearTimeout(timer);
  }, [time, value]);

  return debouncedValue;
};

export default useDebounceValue;
