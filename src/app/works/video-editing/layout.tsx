import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '映像編集 | Tomi Portfolio',
};

function VideoEditingLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default VideoEditingLayout;
