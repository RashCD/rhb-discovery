import { Stack, TextField } from '@mui/material';

const EmailField = () => {
	return (
		<Stack
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				'& > :not(style)': { m: 1, width: '40ch' },
			}}
		>
			<TextField id="outlined-basic" label="Email" variant="outlined" />
			<TextField
				id="outlined-multiline-static"
				label="Little bit about yourself"
				multiline
				rows={4}
			/>
		</Stack>
	);
};

export default EmailField;
