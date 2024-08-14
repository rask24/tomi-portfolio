import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ABOUT ME | Tomi Portfolio',
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default AboutLayout;
