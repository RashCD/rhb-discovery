import Head from 'next/head';
import { Inter } from '@next/font/google';
import Questionnaire from '../components/Questionnaire';
import { Box } from '@mui/system';
import Question from '../components/Question';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
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
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '100%',
						height: '100vh',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Questionnaire />
					<Question
						question="What is your gender?"
						name="question 1"
						multipleQ={[
							{ label: 'Female', id: '123' },
							{ label: 'Male', id: '345' },
							{ label: 'Binary', id: '567' },
						]}
					/>
				</Box>
			</main>
		</>
	);
}
