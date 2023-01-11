import { Box } from '@mui/material';
import { ref } from 'firebase/database';
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import Question from '../components/Question';
import Stepper from '../components/Stepper';
import { db } from '../firebase';

const Questionnaire = () => {
	const [snapshot, loading, error] = useObject(ref(db, 'questionnaire'));

	console.log(snapshot?.val());

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
			<Stepper />
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
	);
};

export default Questionnaire;
