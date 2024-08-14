'use client';

import { useState } from 'react';
import PortfolioCard from '@/components/elements/PortfolioCard';
import PortfolioDetailModal from '@/components/elements/PortfolioDetailModal';

type PortfolioItem = {
  image: string;
  title: string;
  description: string;
  date: Date;
  link?: { text: string; url: string; isExternal: boolean };
};

const portfolioItems: PortfolioItem[] = [
  {
    image: '/images/sample_icon.png',
    title: 'サンプル1',
    description:
      'キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション',
    date: new Date('2024-2-24'),
    link: { text: 'リンクテキスト', url: 'https://example.com', isExternal: true },
  },
  {
    image: '/images/sample_icon.png',
    title: 'サンプル2',
    description:
      'キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション',
    date: new Date('2024-2-24'),
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const handleItemSelect = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, item: PortfolioItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleItemSelect(item);
    }
  };

  return (
    <main className="container mx-auto">
      <h1 className="font-main py-4 text-2xl">tomi portfolio</h1>
      <div>
        {portfolioItems.map((item) => (
          <button
            key={item.title}
            onClick={() => handleItemSelect(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            type="button"
            aria-label={item.title}
            className="block w-fit text-left"
          >
            <PortfolioCard
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          </button>
        ))}
      </div>
      {selectedItem && (
        <PortfolioDetailModal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          item={selectedItem}
        />
      )}
    </main>
  );
}
