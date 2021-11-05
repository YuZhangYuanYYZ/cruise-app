import { useState, useEffect, useRef } from 'react';
type resultType = {
  ref: React.RefObject<HTMLFormElement>;
  isComponentVisible: boolean;
  setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export function useComponentVisible(initialIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref: React.RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const handleClickOutside = (event: Event) => {
    const currentRef = ref.current;
    if (currentRef && !currentRef.contains(<HTMLFormElement>event.target)) {
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
