import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マンガ | Tomi Portfolio',
};

function MangeLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default MangeLayout;
