import { Stack, Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import Calendar from './Calendar';
import EmailField from './EmailField';
import SessionAvatar from './SessionAvatar';
import Stepper from './Stepper';
import Time from './Time';

function BookingAppointmentContent({
	step,
	setStep,
	name,
	image,
}: {
	step: number;
	setStep: Dispatch<SetStateAction<number>>;
	name: string;
	image: string;
}) {
	const router = useRouter();

	const handleNextBookNow = () => {
		if (step !== 2) {
			return setStep((prev: number) => prev + 1);
		}

		return router.push({
			pathname: '/book-details',
			query: router.query,
		});
	};

	return (
		<Stack alignItems={'center'} spacing={3}>
			<Typography id="transition-modal-title" variant="h6" component="h2">
				Booking Appointment
			</Typography>
			<SessionAvatar name={name} image={image} />
			<Stepper
				currentSteps={step}
				totalSteps={3}
				label={['Choose Date', 'Choose Time', 'Details']}
			/>
			{step === 0 ? <Calendar /> : null}
			{step === 1 ? <Time /> : null}
			{step === 2 ? <EmailField /> : null}
			<Button
				variant="contained"
				color="tertiary"
				onClick={handleNextBookNow}
				sx={{ px: 10 }}
			>
				{step === 2 ? 'Book Now' : 'Next'}
			</Button>
		</Stack>
	);
}

export default BookingAppointmentContent;
