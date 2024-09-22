'use client';

import useHeader from '@/hooks/useHeader';
import Header from '@/components/layouts/Header';
import MenuGridSidePanel from '@/components/layouts/MenuGridSidePanel';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { isMobile } = useHeader();

  return (
    <body>
      {isMobile ? <Header /> : <MenuGridSidePanel />}
      <main className={isMobile ? 'mt-16' : 'mr-80'}>{children}</main>
    </body>
  );
}
