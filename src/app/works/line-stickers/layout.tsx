import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LINEスタンプ | Tomi Portfolio',
};

function LineStickersLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default LineStickersLayout;
