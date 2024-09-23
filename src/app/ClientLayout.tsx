'use client';

import { usePathname } from 'next/navigation';
import useHeader from '@/hooks/useHeader';
import Header from '@/components/layouts/Header';
import MenuGridSidePanel from '@/components/layouts/MenuGridSidePanel';
import MenuSidebar from '@/components/layouts/MenuSidebar';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isMobile } = useHeader();
  const pathname = usePathname();

  return (
    <body>
      {isMobile && <Header />}
      <main className={isMobile ? 'mt-16' : 'mr-80'}>{children}</main>
      {!isMobile && <>{pathname === '/' ? <MenuGridSidePanel /> : <MenuSidebar />}</>}
    </body>
  );
}
