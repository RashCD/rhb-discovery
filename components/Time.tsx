import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useState } from 'react';

export default function Time() {
	const [value, setValue] = useState<Dayjs | null>(dayjs('2023-01-01'));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticTimePicker
				displayStaticWrapperAs="mobile"
				minutesStep={30}
				minTime={dayjs('2023-01-01T09:00+08:00')}
				maxTime={dayjs('2023-01-01T18:00+08:00')}
				value={value}
				componentsProps={{
					actionBar: {
						actions: [],
					},
				}}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
