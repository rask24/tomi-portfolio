import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アニメ | Tomi Portfolio',
};

function AnimeLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default AnimeLayout;
