import React from 'react';
import Box from '@mui/material/Box';
import StepperComponent from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const Stepper = ({
	totalSteps = 3,
	currentSteps,
	label,
}: {
	totalSteps?: number;
	currentSteps: number;
	label: string[];
}) => {
	return (
		<Box sx={{ display: { xs: 'none', sm: 'block' }, width: '100%' }}>
			<StepperComponent activeStep={currentSteps} alternativeLabel>
				{label.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</StepperComponent>
		</Box>
	);
};

export default Stepper;
