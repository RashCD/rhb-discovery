import { Box, Stack, Typography } from '@mui/material';
import DashboardLayout from '../../components/DashboardLayout';

const DashboardAppointment = () => {
	return (
		<Stack direction={'row'}>
			<DashboardLayout />
			<Stack sx={{ ml: '270px', width: '100%' }}>
				<Typography component={'h2'} variant="h4" fontWeight={'bold'} sx={{ my: 3 }}>
					Appointments
				</Typography>
				<Box
					sx={{
						backgroundImage: 'url(/dashboard-appointment.png)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						aspectRatio: '5.36',
						scale: '0.9',
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default DashboardAppointment;
