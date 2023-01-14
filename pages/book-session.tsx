import {
	Avatar,
	Badge,
	Button,
	Container,
	Grid,
	Stack,
	styled,
	TextField,
	Typography,
} from '@mui/material';
import SessionCard from '../components/SessionCard';
import Stepper from '../components/Stepper';
import TransitionModal from '../components/TransitionModal';
import { sessionHelper } from '../utils/sessionHelper';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import BookingAppointmentContent from '../components/BookingAppointmentContent';

const BookSession = () => {
	const [value, setValue] = useState<Dayjs | null>(dayjs());
	const [step, setStep] = useState(0);

	return (
		<Container sx={{ my: 3, height: '100%' }}>
			<Typography variant="h4" fontWeight={'500'}>
				Talk to our officers
			</Typography>
			<Grid container my={3}>
				{sessionHelper.map((sessionProfile) => (
					<SessionCard key={sessionProfile.name} {...sessionProfile} />
				))}
			</Grid>
			<TransitionModal
				content={
					<BookingAppointmentContent
						step={step}
						value={value}
						setValue={setValue}
						setStep={setStep}
					/>
				}
			/>
		</Container>
	);
};

export default BookSession;
