import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import Header from '@/components/Header/Header';
import { profile } from '@/content/site';
import './globals.css';

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${profile.name} | Portfólio`,
  description: `${profile.name} — ${profile.role}. ${profile.headline}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#sobre" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <footer className="footer">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{profile.role}</span>
        </footer>
      </body>
    </html>
  );
}
