// Small scripts that may be used in general porpuses.

// Requires timestamp
export const formatDates = (timestamp: number) => {
	if (!timestamp) return null;

	// var date = new Date(timestamp * 1000);
	// // Hours part from the timestamp
	// var hours = date.getHours();
	// // Minutes part from the timestamp
	// var minutes = '0' + date.getMinutes();
	// // Seconds part from the timestamp
	// var seconds = '0' + date.getSeconds();

	// // Will display time in 10:30:23 format
	// var formattedTime =
	// 	hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

	// return formattedTime;
	// console.log(formattedTime);

	const date = new Date(timestamp * 1000);
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

export const formatDate = (timestamp: number) => {
	var a = new Date(timestamp * 1000);
	var months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();

	var time =
		date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	return time;
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
