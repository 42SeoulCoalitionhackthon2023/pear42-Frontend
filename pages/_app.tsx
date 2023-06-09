import '/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '../component/Navbar';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>PEAR42</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
