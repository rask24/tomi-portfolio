import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'デザイン | Tomi Portfolio',
};

function DesignLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default DesignLayout;
