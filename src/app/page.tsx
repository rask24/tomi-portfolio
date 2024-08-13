import PortfolioCard from '@/components/elements/PortfolioCard';

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="font-main py-4 text-2xl">tomi portfolio</h1>
      <div>
        <PortfolioCard
          image="/images/sample_icon.png"
          title="サンプル"
          description="キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション"
          date={new Date('2024-2-24')}
        />
        <PortfolioCard
          image="/images/sample_icon.png"
          title="サンプル"
          description="キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション"
          date={new Date('2024-2-24')}
        />
        <PortfolioCard
          image="/images/sample_icon.png"
          title="サンプル"
          description="キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション"
          date={new Date('2024-2-24')}
        />
        <PortfolioCard
          image="/images/sample_icon.png"
          title="サンプル"
          description="キャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプションキャプション"
          date={new Date('2024-2-24')}
        />
      </div>
    </main>
  );
}
