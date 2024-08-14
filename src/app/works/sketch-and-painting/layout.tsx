import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'スケッチ&ペインティング | Tomi Portfolio',
};

function SketchAndPaintingLayout({ children }: { children: React.ReactNode }) {
  return { children };
}

export default SketchAndPaintingLayout;
