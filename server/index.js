const express = require('express');
const colors = require('colors');
const cors = require('cors');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === 'development',
	})
);

app.listen(port, console.log(`Server running on port ${port}`));
