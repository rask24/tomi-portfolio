'use client';

import { useState, useEffect } from 'react';

function useHeader() {
  const breakPoint = 768; // Tailwind CSS md breakpoint

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < breakPoint);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return { isMenuOpen, setIsMenuOpen, isMobile, toggleMenu };
}

export default useHeader;
