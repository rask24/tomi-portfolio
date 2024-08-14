import Image from 'next/image';
import formatDate from '@/lib/formatDate';

type PortfolioCardProps = {
  image: string;
  title: string;
  description: string;
  date: Date;
};

function PortfolioCard({ image, title, description, date }: PortfolioCardProps) {
  const formattedDate = formatDate(date);

  return (
    <div className="max-w-lg mx-auto my-8 space-y-2">
      <div className="mb-4">
        <Image src={image} className="w-full" width={300} height={300} alt="icon" />
      </div>
      <h3 className="font-main text-3xl text-accent-orange">{title}</h3>
      <div className="font-body text-accent-dark-purple overflow-hidden text-ellipsis line-clamp-3">
        {description}
      </div>
      <div className="font-numeric font-medium text-sm text-accent-dark-purple">
        {formattedDate}
      </div>
    </div>
  );
}

export default PortfolioCard;
