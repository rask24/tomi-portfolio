import Image from 'next/image';

type PortfolioDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  item: {
    image: string;
    title: string;
    description: string;
    date: Date;
    link?: { text: string; url: string; isExternal: boolean };
  };
};

function PortfolioDetailModal({ isOpen, onClose, item }: PortfolioDetailModalProps) {
  if (!isOpen) return null;

  const formattedDate = item.date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700"
          type="button"
        >
          &times;
        </button>
        <h2 className="font-main text-4xl text-accent-orange mb-4">{item.title}</h2>
        <Image src={item.image} width={600} height={400} alt={item.title} className="w-full mb-4" />
        <p className="font-body text-accent-dark-purple mb-4">{item.description}</p>
        <p className="font-numeric text-sm text-accent-dark-purple mb-4">{formattedDate}</p>

        {item.link && (
          <div className="mb-4">
            <a
              href={item.link.url}
              target={item.link.isExternal ? '_blank' : '_self'}
              rel={item.link.isExternal ? 'noopener noreferrer' : ''}
              className="block font-main text-base-white bg-accent-orange py-2 px-4 rounded-md w-fit"
            >
              {item.link.text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortfolioDetailModal;
