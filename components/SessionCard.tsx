import { Grid, Paper, Stack, Box, Typography, Chip, Button, Icon } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { blueGrey, brown, green } from '@mui/material/colors';
import { sessionHelper } from '../utils/sessionHelper';
import { FieldType } from '../utils/sessionHelper';
import Image from 'next/image';

type SessionCardType = {
	handleOpen: ({ name, image }: { name?: string; image?: string }) => void;
} & typeof sessionHelper[0];

const SessionCard = ({ name, fields, image, language, location, handleOpen }: SessionCardType) => {
	return (
		<Grid item xs={12} sm={6} md={4} display="flex">
			<Paper
				elevation={2}
				sx={{
					display: 'flex',
					alignItems: 'center',
					width: '100%',
					borderRadius: 3,
					overflow: 'hidden',
					m: [1, 3],
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
						<Typography
							variant="subtitle2"
							sx={{ mt: 1, fontSize: 12, fontWeight: 'normal' }}
						>
							Fields
						</Typography>
						<Stack direction="row" spacing={2}>
							{fields.map((fieldName) => (
								<Chip
									key={`${name}-${fieldName}`}
									variant="outlined"
									label={fieldName}
									sx={{
										borderWidth: 2,
										borderColor:
											fieldName === FieldType.Saving
												? 'primary.main'
												: fieldName === FieldType.Insurance
												? green[500]
												: fieldName === FieldType.Loan
												? blueGrey[500]
												: brown[500],
									}}
								/>
							))}
						</Stack>
						<Button
							variant="contained"
							color="tertiary"
							sx={{ mx: 3, my: 2 }}
							onClick={() => handleOpen({ name, image })}
						>
							Book Appointment
						</Button>
					</Stack>
				</Stack>
			</Paper>
		</Grid>
	);
};

export default SessionCard;
