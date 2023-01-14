import { Box, Container, Icon, Paper, Stack, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const BookDetails = () => {
	return (
		<Container sx={{ mt: 5 }}>
			<Stack>
				<Typography component={'h2'} variant={'h4'} sx={{ fontWeight: 'bold' }}>
					Booking Details
				</Typography>
				<Stack direction={'row'} sx={{ my: 2 }}>
					<Typography>We already have send booking details to</Typography>&nbsp;
					<Typography sx={{ color: 'tertiary.main', fontWeight: '500' }}>
						nazim@gmail.com
					</Typography>
				</Stack>
				<Paper
					elevation={5}
					sx={{ p: 5, pr: 20, mt: 7, borderRadius: '10px', width: 'fit-content' }}
				>
					<Stack spacing={2}>
						<Stack direction={'row'} alignItems="center" gap={2}>
							<Icon
								component={DateRangeIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography>20 January 2023</Typography>
						</Stack>
						<Stack direction={'row'} alignItems="center" gap={2}>
							<Icon
								component={VideocamIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography
								sx={{ color: 'tertiary.light', textDecoration: 'underline' }}
							>
								https://videocall.com/owf-htwb-zfy
							</Typography>
						</Stack>
						<Stack direction={'row'} alignItems="center" gap={2}>
							<Icon
								component={PersonIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography>Muhamad Afiq</Typography>
						</Stack>
						<Stack direction={'row'} alignItems="center" gap={2}>
							<Icon
								component={ChatBubbleIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography>How can I get home loan with rhb</Typography>
						</Stack>
					</Stack>
				</Paper>
			</Stack>
		</Container>
	);
};

export default BookDetails;
