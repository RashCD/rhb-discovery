import React from 'react';
import Box from '@mui/material/Box';
import StepperComponent from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const defaultSteps = ['What is your financial needs?', 'Create an ad group', 'Create an ad'];

const Stepper = ({
	steps = defaultSteps,
	currentSteps = 0,
}: {
	steps?: string[];
	currentSteps?: number;
}) => {
	return (
		<Box sx={{ width: '100%' }}>
			<StepperComponent activeStep={currentSteps} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</StepperComponent>
		</Box>
	);
};

export default Stepper;
