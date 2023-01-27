import { Box, Container } from '@mui/material';
import Question from '../components/Question';
import { useQueryParam, NumberParam } from 'use-query-params';
import useEffectOnce from '../hooks/useEffectOnce';
import { useRouter } from 'next/router';
import Image from 'next/image';

export type QuestionTypes = {
	q: string;
	title: string;
	possibleAnswer: string[];
};

const Questionnaire = () => {
	const { isReady } = useRouter();
	const [step, setStep] = useQueryParam('step', NumberParam);

	useEffectOnce(() => {
		if (!step && isReady) {
			setStep(0);
		}
	});

	return (
		<Container sx={{ mt: 3 }}>
			<Box sx={{ mb: 7, display: 'flex', justifyContent: 'center' }}>
				<Image
					alt="rhb discovery logo"
					src={'/discovery.png'}
					width={400}
					height={50}
					style={{
						objectFit: 'contain',
					}}
				/>
			</Box>
			<Question />
		</Container>
	);
};

export default Questionnaire;
