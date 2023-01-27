import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

const FinancialQuizStarter = () => {
	return (
		<Stack sx={{ display: 'flex', alignItems: 'center' }}>
			<Typography
				component="h3"
				variant="h4"
				sx={{ mt: 1, mb: 5, fontWeight: 'bold', textAlign: 'center' }}
			>
				Share your email so we can serve you better
			</Typography>
			<Typography variant="subtitle1" sx={{ mt: 1, mb: 5, textAlign: 'center' }}>
				After all, no one else is quite like you. <br />
				It is what motivates us to do the right thing for you.
			</Typography>
			<Image
				alt="novice logo"
				src={'/thinking.png'}
				width={300}
				height={300}
				style={{ objectFit: 'contain' }}
			/>
		</Stack>
	);
};

export default FinancialQuizStarter;
