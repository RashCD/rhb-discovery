import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

type FilterSelectProps = {
	label: string;
	value?: string;
	size?: 'small' | 'medium';
	options: { value: string; label: string }[];
	onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
};

const FilterSelect = ({
	label,
	value = '',
	size = 'small',
	onChange,
	options,
}: FilterSelectProps) => {
	return (
		<FormControl fullWidth size={size}>
			<InputLabel id={`${label}-select-label`}>{label}</InputLabel>
			<Select
				labelId={`${label}-select-label`}
				id={`${label}-select`}
				value={value}
				label={label}
				onChange={onChange}
			>
				{options.map((child) => (
					<MenuItem key={child.label} value={child.value}>
						{child.label}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default FilterSelect;
