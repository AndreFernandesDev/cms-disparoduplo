const express = require('express');
const colors = require('colors');
const cors = require('cors');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
	console.log(`disparoDuplo: listening on port ${port}`);
});
