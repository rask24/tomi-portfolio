import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'イラスト | Tomi Portfolio',
};

function IllustrationLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default IllustrationLayout;
