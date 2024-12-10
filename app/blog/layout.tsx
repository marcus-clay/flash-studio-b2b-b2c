import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Conseils et actualités sur l\'image professionnelle',
  description: 'Découvrez nos conseils d\'experts pour réussir vos portraits professionnels et optimiser votre présence sur LinkedIn.',
  openGraph: {
    title: 'Blog FlashStudio - Conseils et actualités sur l\'image professionnelle',
    description: 'Découvrez nos conseils d\'experts pour réussir vos portraits professionnels et optimiser votre présence sur LinkedIn.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}