import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharkny Extensions',
  description: 'Marketplace and builder studio for WordPress extensions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
