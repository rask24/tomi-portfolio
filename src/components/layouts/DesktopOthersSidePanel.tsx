import Link from 'next/link';
import Image from 'next/image';
import menuConfig from '@/config/menuConfig';

function DesktopOthersSidePanel() {
  return (
    <div className="fixed top-0 right-0 w-80 h-screen bg-base-black z-40 flex flex-col">
      <div className="absolute inset-0">
        <Image
          src="/images/header.png"
          layout="fill"
          objectFit="cover"
          alt="menu background"
          className="opacity-40"
          priority
          loading="eager"
        />
      </div>
      <div className="flex-grow overflow-auto relative z-10">
        <div className="flex flex-col">
          {menuConfig.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="
                py-4 px-6
                text-white text-center font-main text-lg
                relative group
                hover:bg-black hover:bg-opacity-40 transition-colors duration-300
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="relative z-10 flex flex-col">
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
        <div
          className="
            h-16 px-4
            flex justify-center items-center
            font-numeric font-semibold
            bg-accent-dark-purple text-accent-orange
          "
        >
          MENU
        </div>
      </div>
    </div>
  );
}

export default DesktopOthersSidePanel;
