// Components
import Header from '@/Components/Header/Header';

// Fonts
import { roboto, montserrat } from '@/font';

// Styles
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/globals.scss';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
