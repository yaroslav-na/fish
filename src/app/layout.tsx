import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Facebook - log in or sign up',
  description:
    'Log into Facebook to start sharing and connecting with your friends, family, and people you know.',
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="facebook" className="no_js">
      <body
        className="fbIndex UIPage_LoggedOut _-kb _605a b_c3pyn-ahh gecko win x1 Locale_en_US"
        dir="ltr"
      >
        {children}
      </body>
    </html>
  );
}
