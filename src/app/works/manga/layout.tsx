import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マンガ | Tomi Portfolio',
};

function MangeLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default MangeLayout;
