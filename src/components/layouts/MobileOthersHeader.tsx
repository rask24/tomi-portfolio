'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useHeader from '@/hooks/useHeader';
import MobileHeaderMenu from './MobileHeaderMenu';

function MobileOthersHeader() {
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
          <div className="absolute right-0 flex">
            <Link
              href="/"
              className="
                h-16 px-4
                flex justify-center items-center
                font-numeric font-semibold
                bg-accent-orange text-accent-dark-purple
              "
            >
              UPDATES
            </Link>
            <button
              onClick={toggleMenu}
              className="
                h-16 px-4
                flex justify-center items-center
                font-numeric font-semibold
                bg-accent-dark-purple text-accent-orange
              "
              type="button"
            >
              MENU
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && <MobileHeaderMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default MobileOthersHeader;
