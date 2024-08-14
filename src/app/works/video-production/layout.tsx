import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '映像制作 | Tomi Portfolio',
};

function VideoProductionLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default VideoProductionLayout;
