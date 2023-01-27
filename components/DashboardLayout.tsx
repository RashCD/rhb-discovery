import { Stack, Box, MenuItem, ListItemIcon, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import ListIcon from '@mui/icons-material/List';

const DashboardLayout = () => {
	const router = useRouter();

	return (
		<Stack
			sx={{
				position: 'fixed',
				left: 0,
				top: 0,
				bottom: 0,
				width: '250px',
				bgcolor: '#7777771A',
			}}
		>
			<Box sx={{ position: 'relative', mx: 3, maxWidth: 400, height: 100 }}>
				<Image
					alt="rhb discovery logo"
					src={'/discovery.png'}
					fill
					style={{
						objectFit: 'contain',
					}}
				/>
			</Box>
			<Stack sx={{ mt: 2 }}>
				<MenuItem sx={{ py: 2 }} onClick={() => router.push('/dashboard')}>
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<Typography variant="inherit">Dashboard</Typography>
				</MenuItem>
				<MenuItem sx={{ py: 2 }} onClick={() => router.push('/dashboard/lead')}>
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<Typography variant="inherit">Lead List</Typography>
				</MenuItem>
				<MenuItem sx={{ py: 2 }} onClick={() => router.push('/dashboard/appointment')}>
					<ListItemIcon>
						<ListIcon />
					</ListItemIcon>
					<Typography variant="inherit">Appointments</Typography>
				</MenuItem>
			</Stack>
		</Stack>
	);
};

export default DashboardLayout;
