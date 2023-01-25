import { SelectChangeEvent, Stack, TextField } from '@mui/material';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import FilterSelect from './FilterSelect';

const EmailField = () => {
	const [query, setQuery] = useQueryParams({
		email: withDefault(StringParam, ''),
		topic: withDefault(StringParam, ''),
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

	const handleFinanceTopicOnChange = (event: SelectChangeEvent) => {
		return setQuery({
			topic: event.target.value,
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
			<FilterSelect
				label="Finance Topic"
				size="medium"
				options={[
					{ value: 'saving', label: 'Saving' },
					{ value: 'insurance', label: 'Insurance' },
					{ value: 'loan', label: 'Loan' },
					{ value: 'car loan', label: 'Car Loan' },
					{ value: 'home loan', label: 'Home Loan' },
					{ value: 'asb financing', label: 'ASB Financing' },
					{ value: 'investment', label: 'Investment' },
					{ value: 'credit card', label: 'Credit Card' },
				]}
				value={query.topic}
				onChange={handleFinanceTopicOnChange}
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
