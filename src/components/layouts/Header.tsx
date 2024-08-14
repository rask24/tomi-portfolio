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
            className={`absolute right-0 h-16 w-24 font-numeric font-bold flex justify-center items-center ${isMenuOpen ? 'bg-base-black text-accent-orange' : 'bg-accent-orange text-base-black'}`}
            type="button"
          >
            {isMenuOpen ? 'UPDATES' : 'MENU'}
          </button>
        </div>
      </header>
      {isMenuOpen && <MenuGrid onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Header;
