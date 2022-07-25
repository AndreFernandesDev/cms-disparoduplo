import { c as create_ssr_component, d as escape, b as add_attribute, a as subscribe, v as validate_component, e as each } from "../../immutable/chunks/index-eeb80438.js";
import { H as Heading, a as albums, B as Button } from "../../immutable/chunks/Button-dc786067.js";
import { f as fromUnix } from "../../immutable/chunks/utilities-edd6063c.js";
const url = "http://localhost:5000/graphql";
const config = (query2, variables) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: query2,
      variables
    })
  };
};
const fetchData = async (query2, variables = {}) => {
  const response = await fetch(url, config(query2, variables));
  const data = await response.json();
  return { ...data };
};
var MutationTypes = /* @__PURE__ */ ((MutationTypes2) => {
  MutationTypes2["album"] = "album";
  MutationTypes2["media"] = "media";
  return MutationTypes2;
})(MutationTypes || {});
var MutationActions = /* @__PURE__ */ ((MutationActions2) => {
  MutationActions2["add"] = "add";
  MutationActions2["delete"] = "delete";
  MutationActions2["update"] = "update";
  return MutationActions2;
})(MutationActions || {});
const mutations = (type, action) => {
  const mutations2 = {
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
					$date: Float!
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
			`
    },
    media: {
      add: `
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
						id
						name
						type
						path
						featured
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
			`
    }
  };
  return mutations2[type][action];
};
const AlbumCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { date } = $$props;
  let { description } = $$props;
  let { id } = $$props;
  let { image } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  return `<div class="${"card bg-base-100 shadow-xl"}"><a class="${"w-full"}" href="${"album/" + escape(id, true)}"><figure class="${"w-full"}"><img${add_attribute("src", image, 0)} class="${"w-full h-56 object-cover"}" alt="${"Shoes"}"></figure>
		<div class="${"card-body"}"><h2 class="${"card-title"}">${escape(name)} | ${escape(fromUnix(date, "day", "-"))}</h2>
			<p>${escape(description.slice(0, 30))}${escape(description.length > 30 ? "..." : "")}</p>
			<div class="${"card-actions justify-end mt-2"}">${slots.default ? slots.default({}) : ``}</div></div></a></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let handleDelete;
  let $albums, $$unsubscribe_albums;
  $$unsubscribe_albums = subscribe(albums, (value) => $albums = value);
  handleDelete = async (id) => {
    const mutation = mutations(MutationTypes.album, MutationActions.delete);
    const variables = { id };
    await fetchData(mutation, variables);
    const updatedAlbums = $albums.filter((item) => item.id !== id);
    albums.set(updatedAlbums);
  };
  $$unsubscribe_albums();
  return `${$$result.head += `${$$result.title = `<title>Disparo Duplo | Admin Panel</title>`, ""}`, ""}


<section class="${"flex flex-wrap w-full"}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
    default: () => {
      return `All albums`;
    }
  })}
	<div class="${"grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid gap-4 mb-6"}">${each($albums, ({ id, name, date, description, featured }) => {
    return `${validate_component(AlbumCard, "AlbumCard").$$render($$result, {
      image: featured.path,
      id,
      name,
      date,
      description
    }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { type: "Edit", href: "album/" + id }, {}, {
          default: () => {
            return `Editar`;
          }
        })}
				${validate_component(Button, "Button").$$render($$result, {
          onClick: () => handleDelete(id),
          type: "Delete"
        }, {}, {
          default: () => {
            return `Apagar`;
          }
        })}
			`;
      }
    })}`;
  })}</div></section>`;
});
export { Routes as default };
