import { Grid, Stack, Typography } from '@mui/material';
import { personalityTypes, typePersonalityTypes } from '../utils/personalityHelper';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Card from './Card';

const FinancialDescription = () => {
	const { description } = personalityTypes['novice'];

	return (
		<Stack>
			<Typography
				component="h3"
				variant="h4"
				sx={{ mt: 1, mb: 5, fontWeight: 'bold', textAlign: 'center' }}
			>
				Get Financial advise you can improve based on your fitness type
			</Typography>
			<Grid container gap={3} sx={{ width: '100%', justifyContent: 'center' }}>
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
		</Stack>
	);
};

export default FinancialDescription;
