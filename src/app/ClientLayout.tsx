'use client';

import useHeader from '@/hooks/useHeader';
import Header from '@/components/layouts/Header';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useHeader();

  return (
    <body>
      {isMobile && <Header />}
      <main className={isMobile ? 'mt-16' : ''}>{children}</main>
    </body>
  );
}
