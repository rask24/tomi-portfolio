'use client';

import { usePathname } from 'next/navigation';
import useHeader from '@/hooks/useHeader';
import MobileHeader from '@/components/layouts/MobileHeader';
import DesktopHomeSidePanel from '@/components/layouts/DesktopHomeSidePanel';
import MenuSidebar from '@/components/layouts/MenuSidebar';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isMobile } = useHeader();
  const pathname = usePathname();

  return (
    <body>
      {isMobile && <MobileHeader />}
      <main className={isMobile ? 'mt-16' : 'mr-80'}>{children}</main>
      {!isMobile && (pathname === '/' ? <DesktopHomeSidePanel /> : <MenuSidebar />)}
    </body>
  );
}
