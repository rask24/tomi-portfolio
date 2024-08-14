import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ご依頼 | Tomi Portfolio',
};

function RequestLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default RequestLayout;
