// capitalize first letter of string eg: 'saving' => 'Saving' & 'kuala lumpur' => 'Kuala Lumpur'
export const capitalize = (str: string) => {
	const splitStr = str.toLowerCase().split(' ');
	if (splitStr.length > 1) {
		return splitStr.map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
	} else {
		return str.charAt(0).toUpperCase() + str.substring(1);
	}
};
