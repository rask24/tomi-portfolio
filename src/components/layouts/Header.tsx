'use client';

import { useState } from 'react';
import Image from 'next/image';
import MenuGrid from './MenuGrid';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 visible md:invisible w-full h-16 z-40">
        <div className="relative w-full h-full">
          <Image
            src="/images/header.png"
            layout="fill"
            objectFit="cover"
            alt="header-image"
            priority
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
      {isMenuOpen && <MenuGrid onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Header;
