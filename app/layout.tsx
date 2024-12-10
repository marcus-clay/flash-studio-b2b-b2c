import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import '@fontsource/inter/600.css';

export const metadata: Metadata = {
  title: {
    default: 'FlashStudio - Portraits professionnels d\'exception en 5 minutes',
    template: '%s | FlashStudio'
  },
  description: 'Créez des portraits professionnels de qualité studio en quelques minutes. Idéal pour LinkedIn et votre image professionnelle.',
  keywords: ['portrait professionnel', 'photo LinkedIn', 'photo CV', 'portrait corporate', 'photo professionnelle', 'IA', 'intelligence artificielle'],
  authors: [{ name: 'FlashStudio' }],
  creator: 'FlashStudio',
  publisher: 'FlashStudio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://flashstudio.fr',
    siteName: 'FlashStudio',
    title: 'FlashStudio - Portraits professionnels d\'exception en 5 minutes',
    description: 'Créez des portraits professionnels de qualité studio en quelques minutes. Idéal pour LinkedIn et votre image professionnelle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlashStudio - Portraits professionnels',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlashStudio - Portraits professionnels d\'exception en 5 minutes',
    description: 'Créez des portraits professionnels de qualité studio en quelques minutes. Idéal pour LinkedIn et votre image professionnelle.',
    images: ['/og-image.jpg'],
    creator: '@flashstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}