import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT ME | Tomi Portfolio',
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default AboutLayout;
