// Small scripts that may be used in general porpuses.

// Requires timestamp
export const formatDate = (timestamp: number) => {
	if (!timestamp) return null;

	const date = new Date(timestamp);
	let dateFormatted = '';

	let month = '' + date.getMonth();
	let day = '' + date.getDay();
	const year = '' + date.getFullYear();

	if (month.length < 2) {
		month = '0' + month;
	}
	if (day.length < 2) {
		day = '0' + day;
	}

	dateFormatted = [day, month, year].join('-');

	return dateFormatted;
};
