import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { Inter } from '@next/font/google';
import Head from 'next/head';

const theme = createTheme({
	typography: {
		fontFamily: 'inherit',
	},
});

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>RHB Connect</title>
				<meta
					name="description"
					content="RHB connect make it easy for you to contact us for information regarding financial advices or services"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={inter.className}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}
