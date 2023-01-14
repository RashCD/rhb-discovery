import React, { Fragment } from 'react';
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	Grid,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import Stepper from './Stepper';
import {
	useQueryParams,
	NumberParam,
	useQueryParam,
	withDefault,
	ObjectParam,
} from 'use-query-params';
import { isNil } from 'lodash';
import { useRouter } from 'next/router';
import { listQuestions } from '../utils/questionHelper';

const Question = () => {
	const questionTitle = Object.keys(listQuestions);
	const router = useRouter();
	const [step, setStep] = useQueryParam('step', NumberParam);

	const [selectedRadio, setSelectedRadio] = useQueryParams({
		page0: withDefault(ObjectParam, {}),
		page1: withDefault(ObjectParam, {}),
		page2: withDefault(ObjectParam, {}),
		page3: withDefault(ObjectParam, {}),
		page4: withDefault(ObjectParam, {}),
		page5: withDefault(ObjectParam, {}),
		page6: withDefault(ObjectParam, {}),
	});

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		setSelectedRadio({
			[`page${step}`]: {
				// @ts-ignore
				...selectedRadio[`page${step}` as keyof typeof step],
				[index]: event.target.value,
			},
		});
	};

	const handleNext = () => {
		if (!isNil(step) && step + 1 === questionTitle.length) {
			return router.push('/result-output');
		}

		return setStep((step ?? 0) + 1);
	};

	const handlePrevious = () => {
		if (!isNil(step)) {
			return setStep(step - 1);
		}
		return;
	};

	return (
		<>
			<Stepper
				currentSteps={step ?? 0}
				totalSteps={questionTitle.length}
				label={questionTitle}
			/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					width: '100%',
					py: 6,
					px: [1, 2, 7, 10],
					minHeight: 300,
				}}
			>
				{Object.values(listQuestions)[step ?? 0].map((questions, index) => (
					<Fragment key={questions.question}>
						<Typography variant="h6">
							{index + 1}. {questions.question}
						</Typography>
						<FormControl sx={{ pl: [0, 2], my: 5 }}>
							<RadioGroup
								name={`${questionTitle[step ?? 0]}-${index}`}
								value={
									selectedRadio[`page${step ?? 0}` as keyof typeof step][index] ||
									''
								}
								onChange={(event) => handleRadioChange(event, index)}
								sx={{ display: 'flex' }}
							>
								<Grid container spacing={2}>
									{questions.possibleAnswer.map((answer) => (
										<Grid key={answer} item md={5}>
											<Button
												variant={
													selectedRadio[
														`page${step ?? 0}` as keyof typeof step
													][index] === answer.toLowerCase()
														? 'contained'
														: 'outlined'
												}
												sx={{
													borderRadius: 3,
													borderColor: '#bfbfbf',
													color:
														selectedRadio[
															`page${step ?? 0}` as keyof typeof step
														][index] === answer.toLowerCase()
															? ''
															: '#707070',
												}}
											>
												<FormControlLabel
													value={answer.toLowerCase()}
													control={
														<Radio
															sx={{
																'&.Mui-checked': {
																	color: '#ffffff',
																},
															}}
														/>
													}
													label={answer}
													sx={{
														mr: 0,
														borderWidth: 1,
														minWidth: [100, 150, 200, 300, 340],
														fontSize: 14,
													}}
												/>
											</Button>
										</Grid>
									))}
								</Grid>
							</RadioGroup>
						</FormControl>
					</Fragment>
				))}

				<Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<Button
						variant="outlined"
						onClick={handlePrevious}
						sx={{
							visibility: isNil(step) || step < 1 ? 'hidden' : 'visible',
							borderRadius: 2,
							width: 200,
						}}
					>
						{'Previous'}
					</Button>
					<Button
						variant="contained"
						onClick={handleNext}
						sx={{ bgcolor: 'tertiary.main', borderRadius: 2, width: 200 }}
					>
						{!isNil(step) && step + 1 === questionTitle.length ? 'Finish' : 'Next'}
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default Question;
