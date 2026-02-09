import './globals.css';

export const metadata = {
  title: 'ETIC Club - Newsletter',
  description: 'Stay updated with ETIC Club news and events',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
      
        <header className="header">
          <a href="https://etic-club.net/">
            <img src="/img/logo.png" alt="Logo ETIC" className="logo" />
          </a>
        </header>

        {children}
      </body>
    </html>
  );
}
