import { Stack, TextField } from '@mui/material';
import { StringParam, useQueryParam, useQueryParams, withDefault } from 'use-query-params';

const EmailField = () => {
	const [query, setQuery] = useQueryParams({
		email: withDefault(StringParam, ''),
		description: withDefault(StringParam, ''),
	});

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return setQuery({
			email: event.target.value,
		});
	};

	const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		return setQuery({
			description: event.target.value,
		});
	};

	return (
		<Stack
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				'& > :not(style)': { m: 1, width: '40ch' },
			}}
		>
			<TextField
				id="outlined-basic"
				label="Email"
				variant="outlined"
				onChange={handleEmailChange}
				value={query.email}
			/>
			<TextField
				id="outlined-multiline-static"
				label="Little bit about yourself"
				multiline
				rows={4}
				onChange={handleDescriptionChange}
				value={query.description}
			/>
		</Stack>
	);
};

export default EmailField;
