import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menuConfig from '@/config/menuConfig';

type MenuGridProps = {
  onClose: () => void;
};

function MenuGrid({ onClose }: MenuGridProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 top-16 bg-base-black z-50 overflow-auto">
      <div className="relative min-h-full">
        <Image
          src="/images/header.png"
          layout="fill"
          objectFit="cover"
          alt="menu background"
          className="opacity-40"
        />
        <div className="relative z-10">
          <div className="grid grid-cols-2">
            {menuConfig.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative h-32
                  flex items-center justify-center
                  text-base-white text-center font-main text-lg
                  ${index % 2 === 0 ? 'border-r-4 border-base-white' : ''}
                  after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-base-white
                `}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuGrid;
