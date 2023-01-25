import { Container, Grid, SelectChangeEvent, Stack, Typography } from '@mui/material';
import SessionCard from '../components/SessionCard';
import TransitionModal from '../components/TransitionModal';
import { FieldType, LanguageType, sessionHelper } from '../utils/sessionHelper';
import { useState } from 'react';
import BookingAppointmentContent from '../components/BookingAppointmentContent';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';
import FilterSelect from '../components/FilterSelect';
import { capitalize } from '../utils/functionHelper';

const BookSession = () => {
	const [step, setStep] = useState(0);
	const [open, setOpen] = useState(false);
	const [account, setAccount] = useState({ name: '', image: '' });
	const [location, setLocation] = useState('');
	const [fields, setFields] = useState('');
	const [language, setLanguage] = useState('');

	const [instructor, setInstructor] = useQueryParam('instructor', withDefault(StringParam, ''));

	const handleOpen = ({ name, image }: { name?: string; image?: string }) => {
		if (name && image) {
			setAccount({ name, image });
			setInstructor(name);
		}

		setOpen(true);
	};

	const handleClose = () => setOpen(false);

	const handleFieldsOnChange = (event: SelectChangeEvent<string>) =>
		setFields(event.target.value);

	const handleLocationOnChange = (event: SelectChangeEvent<string>) =>
		setLocation(event.target.value);

	const handleLanguageOnChange = (event: SelectChangeEvent<string>) =>
		setLanguage(event.target.value);

	// filter sessionHelper by fields, location, and language
	const filteredSessions = sessionHelper
		.filter((session) => {
			if (fields) {
				return session.fields.includes(capitalize(fields) as FieldType);
			} else {
				return true;
			}
		})
		.filter((session) => {
			if (location) {
				return session.location.includes(capitalize(location));
			} else {
				return true;
			}
		})
		.filter((session) => {
			if (language) {
				return session.language.includes(capitalize(language) as LanguageType);
			} else {
				return true;
			}
		});

	return (
		<Container sx={{ my: 3, height: '100%' }}>
			<Typography component={'h2'} variant="h4" fontWeight={'500'} sx={{ mb: 3 }}>
				Talk to our officers
			</Typography>
			<Stack
				direction={['column', 'row']}
				gap={2}
				sx={{ margin: 'auto', width: ['90%', '90%', '70%'] }}
			>
				<FilterSelect
					label="Fields"
					options={[
						{ value: '', label: 'None' },
						{ value: 'saving', label: 'Saving' },
						{ value: 'insurance', label: 'Insurance' },
						{ value: 'loan', label: 'Loan' },
						{ value: 'investment', label: 'Investment' },
					]}
					value={fields}
					onChange={handleFieldsOnChange}
				/>
				<FilterSelect
					label="Location"
					options={[
						{ value: '', label: 'None' },
						{ value: 'kuala lumpur', label: 'Kuala Lumpur' },
						{ value: 'selangor', label: 'Selangor' },
						{ value: 'johore', label: 'Johore' },
						{ value: 'pahang', label: 'Pahang' },
						{ value: 'sarawak', label: 'Sarawak' },
						{ value: 'negeri sembilan', label: 'Negeri Sembilan' },
					]}
					value={location}
					onChange={handleLocationOnChange}
				/>
				<FilterSelect
					label="Language"
					options={[
						{ value: '', label: 'None' },
						{ value: 'malay', label: 'Malay' },
						{ value: 'english', label: 'English' },
						{ value: 'mandarin', label: 'Mandarin' },
						{ value: 'tamil', label: 'Tamil' },
					]}
					value={language}
					onChange={handleLanguageOnChange}
				/>
			</Stack>
			<Grid container my={3}>
				{filteredSessions.map((sessionProfile) => (
					<SessionCard
						key={sessionProfile.name}
						handleOpen={handleOpen}
						{...sessionProfile}
					/>
				))}
			</Grid>
			<TransitionModal
				open={open}
				handleClose={handleClose}
				content={
					<BookingAppointmentContent
						name={account.name}
						image={account.image}
						step={step}
						setStep={setStep}
					/>
				}
			/>
		</Container>
	);
};

export default BookSession;
