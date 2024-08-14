import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アニメ | Tomi Portfolio',
};

function AnimeLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default AnimeLayout;
