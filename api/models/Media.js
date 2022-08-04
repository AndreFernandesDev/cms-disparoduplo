const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	type: {
		type: String,
	},
	path: {
		type: String,
	},
	featured: {
		type: Boolean,
	},
	section: {
		type: String,
	},
	albumId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Album',
	},
});

module.exports = mongoose.model('Media', MediaSchema);
