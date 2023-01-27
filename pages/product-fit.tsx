import { Typography, Grid, Button, Stack, Container, Paper, Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CardPreview from '../components/CardPreview';
import { productHelper } from '../utils/productHelper';

const ProductFit = () => {
	const router = useRouter();

	const handleBookASession = () => {
		router.push('/book-session');
	};

	const handleVisitBranch = () => {
		router.push('https://www.rhbgroup.com/qms/index.html');
	};

	return (
		<Container sx={{ my: [17, 13] }}>
			<Typography component={'h2'} variant="h4" sx={{ fontWeight: 'bold' }}>
				Product that fit for you
			</Typography>
			<Grid container my={3}>
				{productHelper.map((product) => (
					<CardPreview
						key={product.title}
						title={product.title}
						description={product.description}
						image={product.image}
						link={product?.link}
						fieldName={product?.field}
					/>
				))}
			</Grid>
			<Paper
				elevation={4}
				sx={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bgcolor: 'background.default',
				}}
			>
				<Stack direction={'row'} justifyContent="space-between" py={2}>
					<Box sx={{ flex: 0.5, display: ['none', 'none', 'flex'] }}>
						<Image
							alt="rhb discovery logo"
							src={'/discovery.png'}
							width={300}
							height={30}
							style={{
								objectFit: 'contain',
							}}
						/>
					</Box>
					<Stack
						direction={'row'}
						alignItems={'center'}
						justifyContent="center"
						spacing={2}
						sx={{ flex: 1, mx: 2 }}
					>
						<Typography
							fontWeight={'bold'}
							sx={{ display: ['none', 'flex'], fontSize: [10, 12, '1rem'] }}
						>
							Book Consultant Session
						</Typography>
						<Button
							variant="contained"
							sx={{ bgcolor: 'tertiary.main' }}
							onClick={handleBookASession}
						>
							Book a Session
						</Button>
						<Typography fontWeight={'bold'}>or</Typography>
						<Button
							variant="outlined"
							sx={{ color: 'tertiary.main', borderColor: 'tertiary.main' }}
							onClick={handleVisitBranch}
						>
							Visit our Branch
						</Button>
					</Stack>
					<Stack sx={{ display: ['none', 'none', 'flex'], flex: 0.5 }} />
				</Stack>
			</Paper>
		</Container>
	);
};

export default ProductFit;
