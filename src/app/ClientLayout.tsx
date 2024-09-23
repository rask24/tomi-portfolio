'use client';

import { usePathname } from 'next/navigation';
import useHeader from '@/hooks/useHeader';
import MobileHomeHeader from '@/components/layouts/MobileHomeHeader';
import DesktopHomeSidePanel from '@/components/layouts/DesktopHomeSidePanel';
import DesktopOthersSidePanel from '@/components/layouts/DesktopOthersSidePanel';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isMobile } = useHeader();
  const pathname = usePathname();

  return (
    <body>
      {isMobile && <MobileHomeHeader />}
      <main className={isMobile ? 'mt-16' : 'mr-80'}>{children}</main>
      {!isMobile && (pathname === '/' ? <DesktopHomeSidePanel /> : <DesktopOthersSidePanel />)}
    </body>
  );
}
