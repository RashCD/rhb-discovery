import { Container, Grid, Typography } from '@mui/material';
import SessionCard from '../components/SessionCard';
import { sessionHelper } from '../utils/sessionHelper';

const BookSession = () => {
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
		</Container>
	);
};

export default BookSession;
