import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '映像制作 | Tomi Portfolio',
};

function VideoProductionLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default VideoProductionLayout;
