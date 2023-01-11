import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const defaultSteps = ['What is your financial needs?', 'Create an ad group', 'Create an ad'];

const Questionnaire = ({
	steps = defaultSteps,
	currentSteps = 0,
}: {
	steps?: string[];
	currentSteps?: number;
}) => {
	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={currentSteps} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	);
};

export default Questionnaire;
