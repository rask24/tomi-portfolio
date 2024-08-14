import Link from 'next/link';
import Image from 'next/image';
import menuConfig from '@/config/menuConfig';

type MenuGridProps = {
  onClose: () => void;
};

function MenuGrid({ onClose }: MenuGridProps) {
  return (
    <div className="fixed inset-0 top-16 bg-black bg-opacity-50 z-50">
      <div className="relative w-full h-full overflow-auto">
        <Image
          src="/images/header.png"
          fill
          alt="menu background"
          className="object-cover opacity-70"
        />
        <div className="relative z-10 p-4">
          <div className="grid grid-cols-2 gap-4 mt-16">
            {menuConfig.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="bg-white bg-opacity-80 p-4 rounded-md text-center font-main text-lg hover:bg-opacity-100 transition-all"
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
