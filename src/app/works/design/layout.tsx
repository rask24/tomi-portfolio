import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'デザイン | Tomi Portfolio',
};

function DesignLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default DesignLayout;
