import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
	const router = useRouter();

	const handleGetStarted = () => {
		router.push('/questionnaire');
	};

	return (
		<>
			<Box sx={{ display: 'flex', ml: [2, 2, 5, 10] }}>
				<Box
					sx={{
						flex: [1, 1, 0.5],
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						height: '100vh',
					}}
				>
					<Box sx={{ mb: 3 }}>
						<Image
							alt="rhb connect logo"
							src={'/connect.svg'}
							width={200}
							height={40}
						/>
					</Box>
					<Typography variant="h2" sx={{ fontWeight: '500' }}>
						Let us know you and serve you best
					</Typography>
					<Button
						variant="contained"
						size="large"
						endIcon={<ArrowForwardIosIcon />}
						onClick={handleGetStarted}
						sx={{
							mt: 5,
							bgcolor: 'tertiary.main',
							width: 200,
							justifyContent: 'space-around',
						}}
					>
						Get Started
					</Button>
				</Box>
				<Box sx={{ flex: [0, 0.5, 1], position: 'relative', overflow: 'hidden' }}>
					<Box
						sx={{
							position: 'absolute',
							right: 0,
							height: '100%',
							width: ['70%', 150, 200, 250, 300],
							bgcolor: 'tertiary.light',
							zIndex: -1,
						}}
					/>
					<Box
						sx={{
							position: 'absolute',
							right: 0,
							height: '100%',
							width: [10, 20, 30, 40, 50],
							bgcolor: 'tertiary.main',
							zIndex: -1,
						}}
					/>
					<Box
						sx={{
							display: { xs: 'none', md: 'block' },
							position: 'relative',
							width: '100%',
							height: '100%',
						}}
					>
						<Image
							alt="image of a women holding a phone"
							src="/landing_page.png"
							fill
							priority
							style={{
								objectFit: 'contain',
								transform: 'translateX(20%)',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
}
