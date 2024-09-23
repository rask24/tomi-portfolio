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
    date: new Date('2024/2/24'),
    link: { text: 'リンクテキスト', url: 'https://example.com', isExternal: true },
  },
  {
    image: '/images/sample_icon.png',
    title: 'サンプル2',
    description:
      'キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション',
    date: new Date('2024/2/24'),
  },
  {
    image: '/images/sample_icon.png',
    title: 'サンプル3',
    description:
      'キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション',
    date: new Date('2024/2/24'),
    link: { text: 'リンク', url: '/', isExternal: false },
  },
];

function PortfolioList() {
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
    <>
      <div className="flex flex-col items-center">
        {portfolioItems.map((item) => {
          const onSelect = () => handleItemSelect(item);
          const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => handleKeyDown(e, item);

          return (
            <button
              key={item.title}
              onClick={onSelect}
              onKeyDown={onKeyDown}
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
          );
        })}
      </div>
      {selectedItem && (
        <PortfolioDetailModal
          isOpen={!!selectedItem}
          onClose={handleCloseModal}
          item={selectedItem}
        />
      )}
    </>
  );
}

export default PortfolioList;
