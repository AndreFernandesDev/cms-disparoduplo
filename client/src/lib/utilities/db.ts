// const url = 'http://localhost:5000/graphql'; // DEV
const url = 'https://disparoduplo-cms-jxq6jwbz6a-nw.a.run.app/graphql'; // PROD

const config = (query: string, variables: object) => {
	return {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	};
};

export const fetchData = async (query: string, variables = {}) => {
	const response = await fetch(url, config(query, variables));
	const data = await response.json();

	return { ...data };
};

// Queries
export enum Query {
	all = 'all',
	one = 'one',
}

interface QueryProps {
	id?: string;
}

export const query = (type: Query, props: QueryProps = {}) => {
	const queries = {
		all: `
			query {
				albums {
					id
					name
					date
					location
					password
					description
					featured {
						id
						path
						section
					}
					media {
						id
						name
						type
						path
						section
						featured
					}
				}
			}
		`,
		one: `
			query {
				albums(id: ${props.id ? props.id : ''}) {
					id
					name
					date
					location
					description
					featured {
						id
						path
					}
				}
			}
		`,
	};

	return queries[type];
};

// Mutations
export enum MutationTypes {
	album = 'album',
	media = 'media',
}

export enum MutationActions {
	add = 'add',
	delete = 'delete',
	update = 'update',
	updateSection = 'updateSection',
	updateOrder = 'updateOrder',
}

export const mutations = (type: MutationTypes, action: MutationActions) => {
	const mutations = {
		album: {
			add: `
				mutation (
					$name: String!
					$date: Float!
					$location: String!
					$description: String!
					$password: String!
				) {
					addAlbum(
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`,
			delete: `
				mutation ($id: ID!) {
					deleteAlbum(id: $id) {
						id
						name
					}
				}
			`,
			update: `
				mutation (
					$id: ID!
					$name: String!
					$date: Int!
					$location: String!
					$description: String!
					$password: String!
				) {
					updateAlbum(
						id: $id
						name: $name
						date: $date
						location: $location
						description: $description
						password: $password
					) {
						id
						name
						date
						location
						description
						password
					}
				}
			`,
			updateOrder: `
				mutation (
					$id: ID!
					$position: Int!
				) {
					updateAlbumOrder(
						id: $id
						position: $position
					) {
						id
						position
						name
					}
				}
			`,
		},
		media: {
			add: `
				mutation (
					$featured: Boolean!
					$albumId: String!
					$name: String!
					$type: String!
					$path: String!
					$section: String!
				) {
					addMedia(
						featured: $featured
						albumId: $albumId
						name: $name
						type: $type
						path: $path
						section: $section
					) {
						id
						name
						type
						path
						featured
						section
					}
				}
			`,
			delete: `
				mutation ($id: ID!) {
					deleteMedia(id: $id) {
						id
						name
					}
				}
			`,
			update: `
				mutation (
					$id: ID!
					$oldFeaturedId: ID!
				) {
					updateMedia(
						id: $id
						oldFeaturedId: $oldFeaturedId
					) {
						id
					}
				}
			`,
			updateSection: `
				mutation (
					$id: ID!
					$section: String!
				) {
					updateMediaSection(
						id: $id
						section: $section
					) {
						id
						section
					}
				}
			`,
		},
	};

	return mutations[type][action];
};
