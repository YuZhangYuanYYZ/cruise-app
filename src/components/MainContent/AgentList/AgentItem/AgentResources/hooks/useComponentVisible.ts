import { useState, useEffect, useRef } from 'react';
type ResultType = {
  ref: React.RefObject<HTMLFormElement>;
  isComponentVisible: boolean;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useComponentVisible(initialIsVisible: boolean): ResultType {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const handleClickOutside = (event: Event) => {
    const currentRef = ref.current;
    const target = event.target as HTMLFormElement;
    if (currentRef && !currentRef.contains(target)) {
      setIsComponentVisible(false);
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
