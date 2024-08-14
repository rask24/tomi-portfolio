import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'そのほか | Tomi Portfolio',
};

function OthersLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default OthersLayout;
