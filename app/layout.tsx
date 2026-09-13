import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://mastersuite-baf-creative.woolly-bloom-8433.chatgpt.site',
  ),
  title: 'MasterSuite | Free School Management Software',
  description:
    'MasterSuite is a free offline school management system for managing students, fees, attendance, assessment, reports, payroll, timetables, SMS and more.',
  icons: {
    icon: '/assets/mastersuite-logo.png',
    shortcut: '/favicon.png',
    apple: '/assets/mastersuite-logo.png',
  },
  openGraph: {
    title: 'MasterSuite | Free School Management Software',
    description:
      'MasterSuite is a free offline school management system for managing students, fees, attendance, assessment, reports, payroll, timetables, SMS and more.',
    url: '/',
    siteName: 'MasterSuite',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
