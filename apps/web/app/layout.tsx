import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sharkny Extensions',
  description: 'Marketplace for premium WordPress extensions.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
