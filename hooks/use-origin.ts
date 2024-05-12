import { useEffect, useState } from 'react';

// use to get the current url of the page

export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  if (!mounted) {
    return null;
  }

  return origin;
};
