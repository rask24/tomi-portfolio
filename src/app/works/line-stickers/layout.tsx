import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LINEスタンプ | Tomi Portfolio',
};

function LineStickersLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default LineStickersLayout;
