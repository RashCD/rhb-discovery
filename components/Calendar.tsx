import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';

const isWeekend = (date: Dayjs) => {
	const day = date.day();

	return day === 0 || day === 6;
};

function Calendar({
	value,
	setValue,
}: {
	value: dayjs.Dayjs | null;
	setValue: (val: dayjs.Dayjs) => void;
}) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StaticDatePicker
				displayStaticWrapperAs="desktop"
				openTo="day"
				value={value}
				shouldDisableDate={isWeekend}
				onChange={(newValue) => {
					if (newValue) {
						return setValue(newValue);
					}
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}

export default Calendar;
