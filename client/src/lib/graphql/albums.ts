import { gql } from '@urql/svelte';

// Queries
export const query = {
	all: gql`
		query {
			albums {
				id
				name
				date
				location
				description
			}
		}
	`,
};

// Mutations
export const mutations = {
	add: gql`
		mutation (
			$name: String!
			$date: Float!
			$location: String!
			$description: String!
		) {
			addAlbum(
				name: $name
				date: $date
				location: $location
				description: $description
			) {
				name
				date
				location
				description
			}
		}
	`,
	delete: gql`
		mutation ($id: ID!) {
			deleteAlbum(id: $id) {
				id
				name
			}
		}
	`,
};
