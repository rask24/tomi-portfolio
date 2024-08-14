import Image from 'next/image';

function Header() {
  return (
    <header className="fixed top-0 visible md:invisible w-full h-16">
      <div className="flex">
        <div>
          <Image
            src="/images/header.png"
            fill
            priority
            alt="header-image"
            className="object-cover"
          />
        </div>
        <div className="absolute right-0 h-16 px-4 font-numeric font-bold flex justify-center items-center bg-accent-orange text-base-black">
          MENU
        </div>
      </div>
    </header>
  );
}

export default Header;
