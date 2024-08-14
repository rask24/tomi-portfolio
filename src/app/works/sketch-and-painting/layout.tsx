import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'スケッチ&ペインティング | Tomi Portfolio',
};

function SketchAndPaintingLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default SketchAndPaintingLayout;
