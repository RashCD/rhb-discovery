import React from 'react';
import { Box, Container } from '@mui/material';
import Question from '../components/Question';
import Stepper from '../components/Stepper';
import { useQueryParam, NumberParam } from 'use-query-params';
import useEffectOnce from '../hooks/useEffectOnce';
import { useRouter } from 'next/router';
import { db } from '../firebase';
import { ref } from 'firebase/database';
import { useListVals } from 'react-firebase-hooks/database';

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
		<Container sx={{ mt: 10 }}>
			<Question />
		</Container>
	);
};

export default Questionnaire;
