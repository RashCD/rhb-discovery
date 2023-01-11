import React from 'react';
import { Box } from '@mui/material';
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
	const [snapshot, loading] = useListVals<QuestionTypes>(ref(db, 'questionnaire'));

	useEffectOnce(() => {
		if (!step && isReady) {
			setStep(0);
		}
	});

	if (loading) return '...loading';

	return (
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
			<Question snapshot={snapshot as QuestionTypes[]} />
		</Box>
	);
};

export default Questionnaire;
