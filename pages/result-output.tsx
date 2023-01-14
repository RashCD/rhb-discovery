import { Avatar, Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Card from '../components/Card';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CardPreview from '../components/CardPreview';
import { useRouter } from 'next/router';

const ResultOutput = () => {
	const router = useRouter();

	const handleBookASession = () => {
		router.push('/book-session');
	};

	return (
		<>
			<Container sx={{ display: 'flex', mt: 5, mb: 10 }}>
				<Box
					sx={{
						display: { xs: 'none', md: 'flex' },
						flex: 0.2,
						justifyContent: 'center',
					}}
				>
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: 100, height: 100 }}
					/>
				</Box>
				<Box sx={{ flex: 1 }}>
					<Typography variant="subtitle1">Your Personal Finance type is:</Typography>
					<Typography variant="h3" color="tertiary.main" sx={{ my: 3, fontWeight: 600 }}>
						Competent
					</Typography>
					<Typography variant="subtitle1" sx={{ width: ['100%', '80%', '50%'] }}>
						You are doing a fair job of managing your finances and have taken some steps
						in the right direction.
					</Typography>
					<Grid container gap={2} mt={3}>
						<Card
							title="Financial Management"
							subtitle="Start having financial goals by yearly. Plan your monthly budget according to keep track your expenses."
							icon={LeaderboardIcon}
							color="#ffefef"
						/>
						<Card
							title="Insurance and Estate Planning"
							subtitle="Income protection safeguards your salary by replacing it should you become unable to work get one before its too late."
							icon={HealthAndSafetyIcon}
							color="#effffd"
						/>
						<Card
							title="Saving/Investing"
							subtitle="Increase your saving or reduce unnecessary expenses. Keep your Emergency fund 6months of your salary."
							icon={AccountBalanceWalletIcon}
							color="#e6f7ff"
						/>
						<Card
							title="Credit"
							subtitle="Avoid penalty or late payment. The less you pay in fees, the more money have to grow"
							icon={CreditCardIcon}
							color="#effffd"
						/>
						<Card
							title="Shopping"
							subtitle="Avoid impulse buying make sure you have list Of thing that you want to buy. Focus on the need not on the want"
							icon={ShoppingBagIcon}
							color="#fff8ef"
						/>
					</Grid>
					<Typography sx={{ fontWeight: 'bold', my: 3 }}>
						Product that fit for you
					</Typography>
					<Grid container my={3}>
						<CardPreview />
						<CardPreview />
						<CardPreview />
						<CardPreview />
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
				>
					Visit our Branch
				</Button>
			</Stack>
		</>
	);
};

export default ResultOutput;