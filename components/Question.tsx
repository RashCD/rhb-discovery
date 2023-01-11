import React, { useState } from 'react';
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import Stepper from './Stepper';
import { QuestionTypes } from '../pages/questionnaire';
import {
	useQueryParams,
	NumberParam,
	StringParam,
	useQueryParam,
	withDefault,
} from 'use-query-params';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';

type QuestionProps = {
	snapshot: QuestionTypes[];
};

const Question = ({ snapshot }: QuestionProps) => {
	const [step, setStep] = useQueryParam('step', NumberParam);
	const [selectedRadio, setSelectedRadio] = useQueryParam(
		snapshot![step ?? 0]?.title,
		withDefault(StringParam, '')
	);

	const router = useRouter();

	const totalSteps = snapshot?.length;
	const question = snapshot![step ?? 0]?.q;
	const name = snapshot![step ?? 0]?.title;
	const multipleQ = snapshot![step ?? 0]?.possibleAnswer.map((v, index) => ({
		label: v,
		id: `${index}-${v}`,
	}));

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedRadio(event.target.value);
	};

	const handleNext = (totalSteps: number) => {
		if (!isNil(step) && step + 1 === totalSteps) {
			router.push('/dashboard');
		}

		return setStep((step ?? 0) + 1);
	};

	const handlePrevious = () => {
		if (!isNil(step)) {
			setStep(step - 1);
		}
	};

	return (
		<>
			<Stepper currentSteps={step ?? 0} totalSteps={totalSteps} />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
					pt: 6,
					px: [1, 10],
					ml: 1,
					minHeight: 300,
				}}
			>
				<Typography variant="h6">{question}</Typography>

				<FormControl sx={{ pl: [0, 2] }}>
					<RadioGroup name={name} value={selectedRadio} onChange={handleRadioChange}>
						{multipleQ?.map(({ label, id }) => (
							<FormControlLabel
								key={id}
								value={label.toLowerCase()}
								control={<Radio />}
								label={label}
							/>
						))}
					</RadioGroup>
				</FormControl>
				<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<Button
						onClick={handlePrevious}
						sx={{
							visibility: isNil(step) || step < 1 ? 'hidden' : 'visible',
						}}
					>
						{'Previous'}
					</Button>
					<Button onClick={() => handleNext(totalSteps)}>
						{!isNil(step) && step + 1 === totalSteps ? 'Finish' : 'Next'}
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Question;
