import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, find the element and scroll to it
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [pathname, hash]);
}