import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import ShowNavbarinMarkplace from '@/src/Components/ShowNavbarinMarkplace';
import Footer from '@/src/Components/Footer/Footer';
import { LanguageProvider } from '@/src/Context/LanguageContext';
import { CartProvider } from '@/src/Context/CartContext';
import DirectionProvider from '@/src/Components/DirectionProvider';
import AOSProvider from '@/src/Components/AOSProvider';
import Toast from '@/src/Components/Toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Marsos.sa | Saudi Arabia B2B Export & Supplier Platform',
  description:
    'Marsos.sa is a Saudi-based B2B export platform connecting manufacturers, suppliers, and buyers worldwide. Discover trusted products and grow your business globally.',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <CartProvider>
            <DirectionProvider>
              <ShowNavbarinMarkplace />
              {children}
              <AOSProvider />
              <Toast />
              <Footer />
            </DirectionProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
