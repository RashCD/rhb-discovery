import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
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

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		tertiary: true;
	}
}

declare module '@mui/material/Icon' {
	interface IconPropsColorOverrides {
		tertiary: true;
	}
}

let theme = createTheme({
	palette: {
		background: { default: '#f9f9f9', paper: '#fff' },
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

theme = responsiveFontSizes(theme);

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<QueryParamProvider adapter={NextAdapter}>
					<Head>
						<title>RHB Discovery</title>
						<meta
							name="description"
							content="RHB Discovery make it easy for you to contact us for information regarding financial advices or services"
						/>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="icon" href="/faviconrhb.png" />

						{/* Facebook Meta Tags */}
						<meta property="og:url" content="https://rhb-discovery.vercel.app/" />
						<meta property="og:type" content="website" />
						<meta property="og:title" content="RHB Discovery" />
						<meta
							property="og:description"
							content="RHB Discovery make it easy for you to contact us for information regarding financial advices or services"
						/>
						<meta
							property="og:image"
							content="https://rhb-discovery.vercel.app/landing_og.jpeg"
						/>

						{/* Twitter Meta Tags  */}
						<meta name="twitter:card" content="summary_large_image" />
						<meta property="twitter:domain" content="rhb-discovery.vercel.app" />
						<meta property="twitter:url" content="https://rhb-discovery.vercel.app/" />
						<meta name="twitter:title" content="RHB Discovery" />
						<meta
							name="twitter:description"
							content="RHB Discovery make it easy for you to contact us for information regarding financial advices or services"
						/>
						<meta
							name="twitter:image"
							content="https://rhb-discovery.vercel.app/landing_og.jpeg"
						/>
					</Head>
					<main>
						<Component {...pageProps} />
					</main>
				</QueryParamProvider>
			</ThemeProvider>
		</>
	);
}
