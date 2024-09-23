import Link from 'next/link';
import Image from 'next/image';
import menuConfig from '@/config/menuConfig';

function MenuGridSidePanel() {
  return (
    <div className="fixed top-0 right-0 w-80 h-screen bg-base-black z-40 overflow-auto">
      <div className="relative h-full">
        <Image
          src="/images/header.png"
          layout="fill"
          objectFit="cover"
          alt="menu background"
          className="opacity-80"
          priority
          loading="eager"
        />
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-grow grid grid-cols-2">
            {menuConfig.map((item, index) => (
              <Link
                key={item.path}
                href={item.path}
                className={`
                  relative flex items-center justify-center
                  group
                  ${index % 2 === 0 ? 'border-r-4 border-base-white' : ''}
                  ${index < menuConfig.length - 2 ? 'border-b-4 border-base-white' : ''}
                  transition-all duration-300
                `}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <span
                  className="
                  text-transparent group-hover:text-base-white
                  text-center font-main text-xl
                  transition-colors duration-300
                  z-10
                "
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuGridSidePanel;
