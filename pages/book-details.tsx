import { Container, Icon, Paper, Stack, Typography } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';

const BookDetails = () => {
	const router = useRouter();

	const dateConverted = dayjs(router.query?.date as string).format('DD MMMM YYYY');

	const timeConverted = dayjs(router.query?.time as string).format('hh:mm a');

	return (
		<Container sx={{ mt: 5 }}>
			<Stack>
				<Typography component={'h2'} variant={'h4'} sx={{ fontWeight: 'bold' }}>
					Booking Details
				</Typography>
				<Stack direction={'row'} sx={{ my: 2 }}>
					<Typography>We already have send booking details to</Typography>&nbsp;
					<Typography sx={{ color: 'tertiary.main', fontWeight: '500' }}>
						{router.query?.email ?? 'nazim@gmail.com'}
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
							<Typography>
								{dateConverted} {timeConverted} (GMT+8)
							</Typography>
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
							<Typography>{router.query?.instructor ?? 'Muhammad Afiq'}</Typography>
						</Stack>
						<Stack direction={'row'} alignItems="center" gap={2}>
							<Icon
								component={ChatBubbleIcon}
								fontSize="small"
								sx={{ color: 'tertiary.main' }}
							/>
							<Typography>
								{router.query?.description ?? 'How can I get home loan with rhb'}
							</Typography>
						</Stack>
					</Stack>
				</Paper>
			</Stack>
		</Container>
	);
};

export default BookDetails;
