import { useState, useEffect, useRef } from 'react';

export function useComponentVisible(initialIsVisible, exceptClassName) {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
  );
  const ref = useRef(null);
  console.log(isComponentVisible, 'isComponentVisible0000');

  const handleClickOutside = (event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target.className !== exceptClassName
    ) {
      setIsComponentVisible(!isComponentVisible);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
