import { Typography, Grid, Button, Stack, Container, Paper } from '@mui/material';
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
		<Container sx={{ my: 7 }}>
			<Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
					bottom: 0,
					left: 0,
					right: 0,
					bgcolor: 'background.default',
				}}
			>
				<Stack
					direction={'row'}
					spacing={2}
					alignItems="center"
					justifyContent="center"
					py={2}
				>
					<Typography fontWeight={'bold'}>Book Consultant Session</Typography>
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
			</Paper>
		</Container>
	);
};

export default ProductFit;
