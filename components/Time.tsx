import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DateParam, StringParam, useQueryParam, withDefault } from 'use-query-params';

export default function Time() {
	const [time, setTime] = useQueryParam('time');

	console.log(time);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticTimePicker
				displayStaticWrapperAs="mobile"
				minutesStep={30}
				minTime={dayjs('2023-01-01T09:00+08:00')}
				maxTime={dayjs('2023-01-01T18:00+08:00')}
				value={time ?? dayjs('2023-01-01T9:00')}
				componentsProps={{
					actionBar: {
						actions: [],
					},
				}}
				onChange={(newValue) => {
					setTime(newValue?.toString());
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
