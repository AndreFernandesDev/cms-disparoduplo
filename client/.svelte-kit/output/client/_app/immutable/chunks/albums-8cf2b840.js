import{w as n}from"./index-fe7b1805.js";const d="http://localhost:5000/graphql",i=(a,e)=>({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:e})}),u=async(a,e={})=>({...await(await fetch(d,i(a,e))).json()});var o=(a=>(a.all="all",a.one="one",a))(o||{});const c=(a,e={})=>({all:`
			query {
				albums {
					id
					name
					date
					location
					description
					featured {
						path
					}
					media {
						name
						type
						path
						featured
					}
				}
			}
		`,one:`
			query {
				albums(id: ${e.id?e.id:""}) {
					id
					name
					date
					location
					description
					featured {
						path
					}
				}
			}
		`})[a];var r=(a=>(a.album="album",a.media="media",a))(r||{}),m=(a=>(a.add="add",a.delete="delete",a))(m||{});const p=(a,e)=>({album:{add:`
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
						id
						name
						date
						location
						description
					}
				}
			`,delete:`
				mutation ($id: ID!) {
					deleteAlbum(id: $id) {
						id
						name
					}
				}
			`},media:{add:`
				mutation (
					$featured: Boolean!
					$albumId: String!
					$name: String!
					$type: String!
					$path: String!
				) {
					addMedia(
						featured: $featured
						albumId: $albumId
						name: $name
						type: $type
						path: $path
					) {
						name
						type
						path
						featured
					}
				}
			`,delete:`
				mutation ($id: ID!) {
					deleteAlbum(id: $id) {
						id
						name
					}
				}
			`}})[a][e],$=n([]);export{m as M,o as Q,$ as a,r as b,u as f,p as m,c as q};
