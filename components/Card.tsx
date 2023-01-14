import { Box, Grid, Paper, SvgIconTypeMap, Typography } from '@mui/material';
import { Fragment, FunctionComponent } from 'react';

type IconType = {
	sx: { width: number; height: number; color: string };
};

type CardType = {
	title: string;
	subtitle: string;
	icon?: FunctionComponent<IconType>;
	color?: string;
};

const Card = ({ title, subtitle, icon, color }: CardType) => {
	const Icon = icon ? icon : Fragment;

	return (
		<Grid item md={5} display="flex">
			<Paper
				elevation={0}
				sx={{ display: 'flex', p: 3, alignItems: 'center', gap: 3, bgcolor: color }}
			>
				<Icon sx={{ width: 50, height: 50, color: 'grey' }} />
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Typography sx={{ fontWeight: 'bold', mb: 2 }}>{title}</Typography>
					<Typography>{subtitle}</Typography>
				</Box>
			</Paper>
		</Grid>
	);
};

export default Card;
