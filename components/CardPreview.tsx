import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { green, blueGrey, brown, teal } from '@mui/material/colors';
import Image from 'next/image';
import { FieldType } from '../utils/sessionHelper';

const CardPreview = ({
	title,
	description,
	image,
	link,
	fieldName,
}: {
	title: string;
	description: string;
	image: string;
	link?: string;
	fieldName?: string;
}) => {
	const handleCardClick = () => {
		window.open(link, '_ blank');
	};

	return (
		<Grid item xs={12} sm={6} md={4} display="flex">
			<Button variant="text" onClick={handleCardClick} sx={{ width: '100%' }}>
				<Paper
					elevation={2}
					sx={{
						display: 'flex',
						alignItems: 'center',
						width: '100%',
						borderRadius: 3,
						overflow: 'hidden',
						m: [0, 3],
						aspectRatio: '1/1.1',
						minHeight: 370,
					}}
				>
					<Stack width={'100%'} height={'100%'}>
						<Box
							sx={{
								bgcolor: 'grey',
								width: '100%',
								minHeight: 200,
								position: 'relative',
							}}
						>
							<Image
								alt="product placement"
								src={image}
								fill
								sizes="200px"
								style={{
									objectFit: 'cover',
								}}
							/>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								height: '100%',
								px: 2,
								py: 1,
							}}
						>
							<Typography
								variant="subtitle1"
								sx={{ mb: 1, fontWeight: '500', textAlign: 'left' }}
							>
								{title}
							</Typography>
							<Typography sx={{ fontSize: 11, color: 'grey', textAlign: 'left' }}>
								{description}
							</Typography>
							<Chip
								variant="outlined"
								label={fieldName}
								sx={{
									width: 'fit-content',
									mt: 'auto',
									mb: 2,
									borderWidth: 2,
									borderColor:
										fieldName === FieldType.Saving
											? 'primary.main'
											: fieldName === FieldType.Insurance
											? green[500]
											: fieldName === FieldType.Loan
											? blueGrey[500]
											: fieldName === FieldType.Credit
											? teal[300]
											: brown[500],
								}}
							/>
						</Box>
					</Stack>
				</Paper>
			</Button>
		</Grid>
	);
};

export default CardPreview;
