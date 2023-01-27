import { Box, Stack, Typography } from '@mui/material';
import DashboardLayout from '../../components/DashboardLayout';

const FontPage = () => {
	return (
		<Stack direction={'row'}>
			<DashboardLayout />
			<Stack sx={{ ml: '270px', width: '100%' }}>
				<Typography component={'h2'} variant="h4" fontWeight={'bold'} sx={{ my: 3 }}>
					Discovery Dashboard
				</Typography>
				<Typography variant="h6" fontWeight={'500'} sx={{ ml: 1, mb: 1 }}>
					Demographic
				</Typography>
				<Box
					sx={{
						backgroundImage: 'url(/dashboard-front.png)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						aspectRatio: '1.64',
					}}
				/>
				<Typography variant="h6" fontWeight={'500'} sx={{ ml: 1, mb: 1 }}>
					Financial Fitness Statistic
				</Typography>
				<Box
					sx={{
						backgroundImage: 'url(/dashboard-front-1.png)',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'contain',
						aspectRatio: '1.24',
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default FontPage;
