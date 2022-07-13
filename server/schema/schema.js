const Album = require('../models/Album');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLFloat,
} = require('graphql');

// Album Type
const AlbumType = new GraphQLObjectType({
	name: 'Album',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		date: { type: GraphQLFloat },
		location: { type: GraphQLString },
		description: { type: GraphQLString },
	}),
});

// Media Type
const MediaType = new GraphQLObjectType({
	name: 'Media',
	fields: () => ({
		id: { type: GraphQLID },
		type: { type: GraphQLString },
		path: { type: GraphQLString },
		album: {
			type: AlbumType,
			resolve(parent, args) {
				return Album.findById(parent.clientId);
			},
		},
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		albums: {
			type: new GraphQLList(AlbumType),
			resolve(parent, args) {
				return Album.find();
			},
		},
		album: {
			type: AlbumType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Album.findById(args.id);
			},
		},
	},
});

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		// Add a new album
		addAlbum: {
			type: AlbumType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				date: { type: GraphQLNonNull(GraphQLFloat) },
				location: { type: GraphQLNonNull(GraphQLString) },
				description: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const album = new Album({
					name: args.name,
					date: args.date,
					location: args.location,
					description: args.description,
				});
				return album.save();
			},
		},
		// Remove album
		deleteAlbum: {
			type: AlbumType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Album.findByIdAndRemove(args.id);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
});
