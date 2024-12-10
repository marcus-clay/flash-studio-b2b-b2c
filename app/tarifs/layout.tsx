import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarifs - Des forfaits adaptés à vos besoins',
  description: 'Découvrez nos forfaits pour des portraits professionnels de qualité. Prix transparents et sans surprise.',
  openGraph: {
    title: 'Tarifs FlashStudio - Des forfaits adaptés à vos besoins',
    description: 'Découvrez nos forfaits pour des portraits professionnels de qualité. Prix transparents et sans surprise.',
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}