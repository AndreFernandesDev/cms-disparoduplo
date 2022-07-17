// Small scripts that may be used in general porpuses.

// Requires timestamp
export const fromUnix = (timestamp: number, start = 'year', split = '-') => {
	if (!timestamp) return '';

	const date = new Date(timestamp * 1000);
	const dateDivider = date
		.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		.split('/');

	const day = dateDivider[0];
	const month = dateDivider[1];
	const year = dateDivider[2];

	if (start == 'day') return [day, month, year].join(split);
	if (start == 'month') return [month, day, year].join(split);
	if (start == 'year') return [year, month, day].join(split);
};

export const toUnix = (dateString: string) => {
	if (!dateString) return null;

	const date = new Date(dateString);
	const unix = Math.floor(date.getTime() / 1000);

	return unix;
};

export const isEqual = (obj1: object, obj2: object) => {
	var props1 = Object.getOwnPropertyNames(obj1);
	var props2 = Object.getOwnPropertyNames(obj2);
	if (props1.length != props2.length) {
		return false;
	}
	for (var i = 0; i < props1.length; i++) {
		let val1 = obj1[props1[i]];
		let val2 = obj2[props1[i]];
		let isObjects = isObject(val1) && isObject(val2);
		if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
			return false;
		}
	}
	return true;
};
function isObject(object: object) {
	return object != null && typeof object === 'object';
}
