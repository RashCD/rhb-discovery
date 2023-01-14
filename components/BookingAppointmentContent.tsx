import { Stack, Typography, Button } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import Calendar from './Calendar';
import EmailField from './EmailField';
import SessionAvatar from './SessionAvatar';
import Stepper from './Stepper';
import Time from './Time';

function BookingAppointmentContent({
	step,
	value,
	setValue,
	setStep,
}: {
	step: number;
	value: dayjs.Dayjs | null;
	setValue: (val: Dayjs) => void;
	setStep: Dispatch<SetStateAction<number>>;
}) {
	return (
		<Stack alignItems={'center'} spacing={3}>
			<Typography id="transition-modal-title" variant="h6" component="h2">
				Booking Appointment
			</Typography>
			<SessionAvatar />
			<Stepper
				currentSteps={step}
				totalSteps={3}
				label={['Choose Date', 'Choose Time', 'Details']}
			/>
			{step === 0 ? <Calendar value={value} setValue={setValue} /> : null}
			{step === 1 ? <Time /> : null}
			{step === 2 ? <EmailField /> : null}
			<Button
				variant="contained"
				color="tertiary"
				onClick={() => setStep((prev: number) => prev + 1)}
				sx={{ px: 10 }}
			>
				{step === 2 ? 'Book Now' : 'Next'}
			</Button>
		</Stack>
	);
}

export default BookingAppointmentContent;
