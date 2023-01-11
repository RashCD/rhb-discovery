import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

type QuestionProps = {
	question: string;
	name: string;
	multipleQ: MultipleQ[];
};

type MultipleQ = {
	id: string | number;
	label: string;
	component?: string;
};

const Question = ({ question, name, multipleQ }: QuestionProps) => {
	const [selectedRadio, setSelectedRadio] = useState<string>('');

	const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedRadio(event.target.value);
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				width: '100%',
				pt: 6,
				pl: [1, 10],
				ml: 1,
			}}
		>
			<Typography variant="h6">{question}</Typography>

			<FormControl sx={{ pl: [0, 2] }}>
				<RadioGroup name={name} value={selectedRadio} onChange={handleRadioChange}>
					{multipleQ.map(({ label, id }) => (
						<FormControlLabel
							key={id}
							value={label.toLowerCase()}
							control={<Radio />}
							label={label}
						/>
					))}
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default Question;
