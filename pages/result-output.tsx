import { Box, Button, Container, Grid, Icon, IconButton, Stack, Typography } from '@mui/material';
import Card from '../components/Card';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { personalityTypes, typePersonalityTypes } from '../utils/personalityHelper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

	const handleSeeMore = () => {
		router.push('/product-fit');
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

	const targetPersonality = (router.query.type as typePersonalityTypes) || 'novice';

	const { title, sub, icon, description } = personalityTypes[targetPersonality];

	return (
		<Container sx={{ display: 'flex', mb: 10 }}>
			<Box
				sx={{
					display: { xs: 'none', md: 'flex' },
					flex: 0.2,
					justifyContent: 'center',
					position: 'relative',
					mt: 2,
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
				<Stack direction={'row'} justifyContent="space-between" alignItems={'center'}>
					<Typography variant="h3" color="tertiary.main" sx={{ my: 3, fontWeight: 600 }}>
						{title}
					</Typography>
					<Button
						variant="contained"
						endIcon={<ArrowForwardIosIcon />}
						onClick={handleSeeMore}
						sx={{
							bgcolor: 'tertiary.main',
							width: ['60%', '40%', '30%'],
							height: 40,
							maxWidth: [250, 300],
							justifyContent: 'space-between',
							borderRadius: 3,
							fontSize: [12, 12, 14, 15],
						}}
					>
						Improve Your Fitness Score
					</Button>
				</Stack>
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
				<Stack direction={'row'} sx={{ my: 5, alignItems: 'center' }} gap={2}>
					<Typography sx={{ fontWeight: 'bold' }}>Share</Typography>
					<IconButton disableRipple sx={{ bgcolor: '#364886' }}>
						<Icon component={FacebookIcon} fontSize="medium" sx={{ color: 'white' }} />
					</IconButton>
					<IconButton disableRipple sx={{ bgcolor: '#3D8DED' }}>
						<Icon component={TwitterIcon} fontSize="medium" sx={{ color: 'white' }} />
					</IconButton>
					<IconButton disableRipple sx={{ bgcolor: '#3B965F' }}>
						<Icon component={EmailIcon} fontSize="medium" sx={{ color: 'white' }} />
					</IconButton>
				</Stack>
			</Box>
		</Container>
	);
};

export default ResultOutput;
