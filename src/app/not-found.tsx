import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/404.png"
        alt="404 Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-numeric px-6 py-3 bg-gray-900 bg-opacity-75">
          404 NOT FOUND
        </h1>
      </div>
    </div>
  );
}
