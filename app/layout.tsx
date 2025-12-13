import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ETIC Club - Newsletter',
  description: 'Stay updated with ETIC Club news and events',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}