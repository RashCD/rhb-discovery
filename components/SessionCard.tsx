import { Grid, Paper, Stack, Box, Typography, Chip, Button, Icon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { green, teal } from '@mui/material/colors';
import { sessionHelper } from '../utils/sessionHelper';
import Image from 'next/image';

const SessionCardType = sessionHelper[0];

const SessionCard = ({ name, fields, image, language, location }: typeof SessionCardType) => {
	return (
		<Grid item md={4} display="flex">
			<Paper
				elevation={2}
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					borderRadius: 3,
					overflow: 'hidden',
					m: 3,
				}}
			>
				<Stack width={'100%'} height={'100%'}>
					<Box
						sx={{
							position: 'relative',
							bgcolor: 'grey',
							width: '100%',
							minHeight: 200,
						}}
					>
						<Image
							alt="profile image"
							src={image}
							sizes="200px"
							fill
							priority
							style={{
								objectFit: 'cover',
							}}
						/>
					</Box>
					<Stack
						gap={1}
						sx={{
							height: '100%',
							px: 3,
							py: 2,
						}}
					>
						<Typography variant="h6" sx={{ fontWeight: '600' }}>
							{name}
						</Typography>
						<Stack direction={'row'} gap={1} alignItems="center">
							<Icon
								component={LocationOnIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography variant="subtitle1">{location}</Typography>
						</Stack>
						<Stack direction={'row'} alignItems="center" gap={1}>
							<Icon
								component={QuestionAnswerIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography variant="subtitle1">{language.join(', ')}</Typography>
						</Stack>
						<Typography variant="subtitle2" sx={{ fontSize: 12, fontWeight: 'normal' }}>
							Fields
						</Typography>
						<Stack direction="row" spacing={2}>
							<Chip
								variant="outlined"
								label="Saving"
								sx={{ borderColor: 'primary.main' }}
							/>
							<Chip
								variant="outlined"
								label="Insurance"
								sx={{ borderColor: green[500] }}
							/>
							<Chip variant="outlined" label="Loan" sx={{ borderColor: teal[700] }} />
						</Stack>
						<Button variant="contained" color="tertiary" sx={{ mx: 3, my: 2 }}>
							Book Appointment
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default SessionCard;
