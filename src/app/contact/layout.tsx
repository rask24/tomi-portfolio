import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | Tomi Portfolio',
};

function ContactLayout({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default ContactLayout;
