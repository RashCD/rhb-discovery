import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, PaletteOptions, ThemeProvider } from '@mui/material';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import { NextAdapter } from 'next-query-params';
import { QueryParamProvider } from 'use-query-params';

const defaultTheme = createTheme();

declare module '@mui/material/styles' {
	interface PaletteOptions {
		tertiary: {
			main: string;
			light: string;
		};
	}
}

const theme = createTheme({
	palette: {
		tertiary: defaultTheme.palette.augmentColor({
			color: { main: '#2053a4', light: '#359bd8' },
			name: 'tertiary',
		}),
	},
	typography: {
		fontFamily: 'inherit',
		button: {
			textTransform: 'none',
		},
	},
});

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<QueryParamProvider adapter={NextAdapter}>
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
			</QueryParamProvider>
		</ThemeProvider>
	);
}
