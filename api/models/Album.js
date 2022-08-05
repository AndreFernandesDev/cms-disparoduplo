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
	password: {
		type: String,
	},
	position: {
		type: Number,
	},
});

module.exports = mongoose.model('Album', AlbumSchema);
