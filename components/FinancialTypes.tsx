import { Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const FinancialTypes = () => {
	return (
		<Stack>
			<Typography
				component="h3"
				variant="h4"
				sx={{ mt: 1, mb: 5, fontWeight: 'bold', textAlign: 'center' }}
			>
				Explore your financial fitness type
			</Typography>
			<Grid container gap={3} sx={{ justifyContent: 'center' }}>
				<Stack sx={{ alignItems: 'center' }}>
					<Image
						alt="novice logo"
						src={'/novice.png'}
						width={200}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
					<Typography variant="h5" sx={{ color: 'tertiary.main', fontWeight: 'bold' }}>
						Novice
					</Typography>
				</Stack>
				<Stack sx={{ alignItems: 'center' }}>
					<Image
						alt="advance logo"
						src={'/advance.png'}
						width={200}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
					<Typography variant="h5" sx={{ color: 'tertiary.main', fontWeight: 'bold' }}>
						Advance
					</Typography>
				</Stack>
				<Stack sx={{ alignItems: 'center' }}>
					<Image
						alt="competent logo"
						src={'/competent.png'}
						width={200}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
					<Typography variant="h5" sx={{ color: 'tertiary.main', fontWeight: 'bold' }}>
						Competent
					</Typography>
				</Stack>
				<Stack sx={{ alignItems: 'center' }}>
					<Image
						alt="proficient logo"
						src={'/proficient.png'}
						width={200}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
					<Typography variant="h5" sx={{ color: 'tertiary.main', fontWeight: 'bold' }}>
						Proficient
					</Typography>
				</Stack>
				<Stack sx={{ alignItems: 'center' }}>
					<Image
						alt="expert logo"
						src={'/expert.png'}
						width={200}
						height={200}
						style={{ objectFit: 'contain' }}
					/>
					<Typography variant="h5" sx={{ color: 'tertiary.main', fontWeight: 'bold' }}>
						Expert
					</Typography>
				</Stack>
			</Grid>
		</Stack>
	);
};

export default FinancialTypes;
