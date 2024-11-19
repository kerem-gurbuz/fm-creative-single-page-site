import { Header } from '@/components/layout';
import { commissioner } from '@/lib/styles/fonts';
import '@/lib/styles/globals.css';

export { metadata } from '@/config/seo/metadata';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-coral-red scrollbar-track-obsidian scroll-smooth"
    >
      <body
        className={`${commissioner.variable} font-commissioner antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
