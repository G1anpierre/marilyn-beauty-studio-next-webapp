import React, { useEffect } from 'react';

export function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
