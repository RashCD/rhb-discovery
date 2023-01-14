import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { Dayjs } from 'dayjs';
import { StringParam, useQueryParam, withDefault } from 'use-query-params';

const isWeekend = (date: Dayjs) => {
	const day = date.day();

	return day === 0 || day === 6;
};

function Calendar() {
	const [date, setDate] = useQueryParam('date', withDefault(StringParam, ''));
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticDatePicker
				displayStaticWrapperAs="desktop"
				openTo="day"
				value={date}
				shouldDisableDate={isWeekend}
				onChange={(newValue) => {
					if (newValue) {
						return setDate(newValue.toString());
					}
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}

export default Calendar;
