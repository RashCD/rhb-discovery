import { Container, Grid, Typography } from '@mui/material';
import SessionCard from '../components/SessionCard';
import TransitionModal from '../components/TransitionModal';
import { sessionHelper } from '../utils/sessionHelper';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import BookingAppointmentContent from '../components/BookingAppointmentContent';

const BookSession = () => {
	const [value, setValue] = useState<Dayjs | null>(dayjs());
	const [step, setStep] = useState(0);
	const [open, setOpen] = useState(false);
	const [account, setAccount] = useState({ name: '', image: '' });

	const handleOpen = ({ name, image }: { name?: string; image?: string }) => {
		if (name && image) {
			setAccount({ name, image });
		}

		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	return (
		<Container sx={{ my: 3, height: '100%' }}>
			<Typography variant="h4" fontWeight={'500'}>
				Talk to our officers
			</Typography>
			<Grid container my={3}>
				{sessionHelper.map((sessionProfile) => (
					<SessionCard
						key={sessionProfile.name}
						handleOpen={handleOpen}
						{...sessionProfile}
					/>
				))}
			</Grid>
			<TransitionModal
				open={open}
				handleClose={handleClose}
				content={
					<BookingAppointmentContent
						name={account.name}
						image={account.image}
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
