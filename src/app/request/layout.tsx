import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ご依頼 | Tomi Portfolio',
};

function RequestLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default RequestLayout;
