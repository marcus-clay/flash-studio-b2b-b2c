import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions Entreprises - Portraits professionnels pour vos équipes',
  description: 'Solutions sur mesure pour les entreprises. Gérez les portraits professionnels de vos collaborateurs efficacement.',
  openGraph: {
    title: 'Solutions Entreprises FlashStudio - Portraits professionnels pour vos équipes',
    description: 'Solutions sur mesure pour les entreprises. Gérez les portraits professionnels de vos collaborateurs efficacement.',
  },
};

export default function EntreprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}