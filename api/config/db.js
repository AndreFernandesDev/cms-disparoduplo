const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
	const conn = await mongoose.connect(
		'mongodb+srv://ospinhas:ospinhas@cluster0.pjj4j.mongodb.net/?retryWrites=true&w=majority'
	);
	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
