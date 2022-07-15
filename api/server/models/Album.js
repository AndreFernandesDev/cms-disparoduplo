const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	date: {
		type: Number,
	},
	location: {
		type: String,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model('Album', AlbumSchema);
