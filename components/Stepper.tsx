import React from 'react';
import Box from '@mui/material/Box';
import StepperComponent from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const Stepper = ({
	totalSteps = 3,
	currentSteps,
}: {
	totalSteps?: number;
	currentSteps: number;
}) => {
	return (
		<Box sx={{ width: '100%' }}>
			<StepperComponent activeStep={currentSteps} alternativeLabel>
				{[...Array.from(Array(totalSteps).keys())].map((label) => (
					<Step key={label}>
						<StepLabel></StepLabel>
					</Step>
				))}
			</StepperComponent>
		</Box>
	);
};

export default Stepper;
