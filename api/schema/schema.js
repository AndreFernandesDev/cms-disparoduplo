const Album = require('../models/Album');
const Media = require('../models/Media');

const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLBoolean,
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
		password: { type: GraphQLString },
		featured: {
			type: MediaType,
			resolve(parent, args) {
				return Media.findOne({ albumId: parent.id, featured: true });
			},
		},
		media: {
			type: new GraphQLList(MediaType),
			resolve(parent, args) {
				return Media.find({ albumId: parent.id });
			},
		},
	}),
});

// Media Type
const MediaType = new GraphQLObjectType({
	name: 'Media',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		type: { type: GraphQLString },
		path: { type: GraphQLString },
		featured: { type: GraphQLBoolean },
		section: { type: GraphQLString },
		albumId: { type: GraphQLString },
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
		medias: {
			type: new GraphQLList(MediaType),
			resolve(parent, args) {
				return Media.find();
			},
		},
		media: {
			type: MediaType,
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
				password: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const album = new Album({
					name: args.name,
					date: args.date,
					location: args.location,
					description: args.description,
					password: args.password,
				});
				return album.save();
			},
		},
		updateAlbum: {
			type: AlbumType,
			args: {
				id: { type: GraphQLID },
				name: { type: GraphQLString },
				date: { type: GraphQLFloat },
				location: { type: GraphQLString },
				description: { type: GraphQLString },
				password: { type: GraphQLString },
			},
			resolve(parent, args) {
				const id = args.id;
				delete args.id;
				return Album.findByIdAndUpdate(id, args);
			},
		},
		// Remove album
		deleteAlbum: {
			type: AlbumType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				Media.find({ albumId: args.id }).remove().exec();
				return Album.findByIdAndDelete(args.id);
			},
		},
		// Add a new media
		addMedia: {
			type: MediaType,
			args: {
				name: { type: GraphQLNonNull(GraphQLString) },
				type: { type: GraphQLNonNull(GraphQLString) },
				path: { type: GraphQLNonNull(GraphQLString) },
				featured: { type: GraphQLNonNull(GraphQLBoolean) },
				section: { type: GraphQLNonNull(GraphQLString) },
				albumId: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent, args) {
				const album = new Media({
					name: args.name,
					type: args.type,
					path: args.path,
					featured: args.featured,
					section: args.section,
					albumId: args.albumId,
				});
				return album.save();
			},
		},
		// Remove media
		deleteMedia: {
			type: MediaType,
			args: { id: { type: GraphQLID } },
			resolve(parent, args) {
				return Media.findByIdAndRemove(args.id);
			},
		},
		updateMedia: {
			type: MediaType,
			args: {
				id: { type: GraphQLID },
				oldFeaturedId: { type: GraphQLID },
			},
			resolve: async (parent, args) => {
				await Media.findByIdAndUpdate(args.oldFeaturedId, { featured: false });
				return await Media.findByIdAndUpdate(args.id, { featured: true });
			},
		},
		updateMediaSection: {
			type: MediaType,
			args: {
				id: { type: GraphQLID },
				section: { type: GraphQLString },
			},
			resolve: async (parent, args) => {
				return await Media.findByIdAndUpdate(args.id, {
					section: args.section,
				});
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation,
});
