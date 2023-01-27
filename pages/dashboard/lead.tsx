import { Box, Stack, Typography } from '@mui/material';
import DashboardLayout from '../../components/DashboardLayout';

const DashboardList = () => {
	return (
		<Stack direction={'row'}>
			<DashboardLayout />
			<Stack sx={{ ml: '270px', width: '100%' }}>
				<Typography component={'h2'} variant="h4" fontWeight={'bold'} sx={{ my: 4.5 }}>
					RHB Discovery Leads
				</Typography>
				<Box
					sx={{
						backgroundImage: 'url(/dashboard-lead.png)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						aspectRatio: '1.01',
						scale: '0.8',
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default DashboardList;
