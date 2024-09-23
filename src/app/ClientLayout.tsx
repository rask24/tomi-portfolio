'use client';

import { usePathname } from 'next/navigation';
import useHeader from '@/hooks/useHeader';
import MobileHomeHeader from '@/components/layouts/MobileHomeHeader';
import MobileOthersHeader from '@/components/layouts/MobileOthersHeader';
import DesktopHomeSidePanel from '@/components/layouts/DesktopHomeSidePanel';
import DesktopOthersSidePanel from '@/components/layouts/DesktopOthersSidePanel';

type ClientLayoutProps = {
  children: React.ReactNode;
};

export default function ClientLayout({ children }: ClientLayoutProps) {
  const { isMobile } = useHeader();
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <body>
      {isMobile && (isHomePage ? <MobileHomeHeader /> : <MobileOthersHeader />)}
      <main className={isMobile ? 'mt-16' : 'mr-80'}>{children}</main>
      {!isMobile && (isHomePage ? <DesktopHomeSidePanel /> : <DesktopOthersSidePanel />)}
    </body>
  );
}
