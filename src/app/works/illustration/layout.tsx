import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'イラスト | Tomi Portfolio',
};

function IllustrationLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default IllustrationLayout;
