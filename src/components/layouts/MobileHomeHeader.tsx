'use client';

import { useState } from 'react';
import Image from 'next/image';
import useHeader from '@/hooks/useHeader';
import MobileHeaderMenu from './MobileHeaderMenu';

function MobileHomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile } = useHeader();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (!isMobile) return null;

  return (
    <>
      <header className="fixed top-0 w-full h-16 z-40">
        <div className="relative w-full h-full">
          <Image
            src="/images/header.png"
            layout="fill"
            objectFit="cover"
            alt="header-image"
            priority
            loading="eager"
          />
          <button
            onClick={toggleMenu}
            className={`
              absolute right-0 h-16 px-4
              flex justify-center items-center
              font-numeric font-semibold
              ${isMenuOpen ? 'bg-accent-dark-purple text-accent-orange' : 'bg-accent-orange text-accent-dark-purple'}`}
            type="button"
          >
            {isMenuOpen ? 'UPDATES' : 'MENU'}
          </button>
          {isMenuOpen && (
            <div className="absolute top-2 right-1 w-2 h-2 rounded-full bg-accent-orange z-100" />
          )}
        </div>
      </header>
      {isMenuOpen && <MobileHeaderMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default MobileHomeHeader;
