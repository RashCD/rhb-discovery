import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Card from '../components/Card';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CardPreview from '../components/CardPreview';
import { useRouter } from 'next/router';
import { productHelper } from '../utils/productHelper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { personalityTypes, typePersonalityTypes } from '../utils/personalityHelper';

const ResultOutput = () => {
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setLoading(false);
		}, 5000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	const handleBookASession = () => {
		router.push('/book-session');
	};

	const handleVisitBranch = () => {
		router.push('https://www.rhbgroup.com/qms/index.html');
	};

	if (loading) {
		return (
			<Box
				sx={{
					display: 'flex',
					width: '100vw',
					height: '100vh',
					justifyContent: 'center',
					alignItems: 'center',
					bgcolor: '#F1F2F3',
				}}
			>
				<Image
					alt="loading indicator"
					src="/loading_indicator.gif"
					priority
					width={100}
					height={100}
				/>
			</Box>
		);
	}

	const targetPersonality = router.query.type as typePersonalityTypes;

	const { title, sub, icon, description } = personalityTypes[targetPersonality];

	return (
		<>
			<Container sx={{ display: 'flex', mb: 10 }}>
				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						flex: 0.2,
						justifyContent: 'center',
						position: 'relative',
						mt: 5,
					}}
				>
					<Image
						alt="cartoon"
						src={icon}
						priority
						width={150}
						height={200}
						style={{
							objectFit: 'contain',
						}}
					/>
				</Box>
				<Box sx={{ flex: 1, mt: 6 }}>
					<Typography variant="subtitle1">Your Personal Finance type is:</Typography>
					<Typography variant="h3" color="tertiary.main" sx={{ my: 3, fontWeight: 600 }}>
						{title}
					</Typography>
					<Typography variant="subtitle1" sx={{ width: ['100%', '80%', '50%'] }}>
						{sub}
					</Typography>
					<Grid container gap={2} mt={3}>
						<Card
							title={description[0].title}
							subtitle={description[0].sub}
							icon={LeaderboardIcon}
							color="#ffefef"
						/>
						<Card
							title={description[1].title}
							subtitle={description[1].sub}
							icon={HealthAndSafetyIcon}
							color="#effffd"
						/>
						<Card
							title={description[2].title}
							subtitle={description[2].sub}
							icon={AccountBalanceWalletIcon}
							color="#e6f7ff"
						/>
						<Card
							title={description[3].title}
							subtitle={description[3].sub}
							icon={CreditCardIcon}
							color="#effffd"
						/>
						<Card
							title={description[4].title}
							subtitle={description[4].sub}
							icon={ShoppingBagIcon}
							color="#fff8ef"
						/>
					</Grid>
					<Typography sx={{ fontWeight: 'bold', my: 3 }}>
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
							/>
						))}
					</Grid>
				</Box>
			</Container>
			<Stack
				direction={'row'}
				spacing={2}
				alignItems="center"
				justifyContent="center"
				position="fixed"
				py={3}
				bottom={0}
				right={0}
				left={0}
				bgcolor="#fff"
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
		</>
	);
};

export default ResultOutput;
