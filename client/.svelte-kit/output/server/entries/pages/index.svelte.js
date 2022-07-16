import { c as create_ssr_component, e as escape, b as subscribe, v as validate_component, d as each } from "../../immutable/chunks/index-a408cf9c.js";
import { a as albums } from "../../immutable/chunks/albums-dc610c70.js";
import { H as Heading, B as Button } from "../../immutable/chunks/Heading-eec19c94.js";
const formatDate = (timestamp) => {
  var a = new Date(timestamp * 1e3);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
};
const AlbumCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { date } = $$props;
  let { description } = $$props;
  let { id } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div class="${"w-4/12 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"}"><a href="${"album/" + escape(id, true)}"><img class="${"rounded-t-lg h-64 w-full object-cover"}" src="${"sample.jpg"}" alt="${""}"></a>
	<div class="${"p-5"}"><a href="${"album/" + escape(id, true)}"><h5 class="${"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"}">${escape(name)} | ${escape(formatDate(date))}</h5></a>
		<p class="${"mb-3 font-normal text-gray-700 dark:text-gray-400"}">${escape(description)}</p>

		<div class="${"flex w-full justify-end"}">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $albums, $$unsubscribe_albums;
  $$unsubscribe_albums = subscribe(albums, (value) => $albums = value);
  $$unsubscribe_albums();
  return `



<section class="${"flex flex-wrap w-full justify-center my-12"}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
    default: () => {
      return `Albuns`;
    }
  })}
	<div class="${"flex w-full flex-wrap justify-evenly items-stretch gap-6"}">${each($albums, ({ id, name, date, description }) => {
    return `${validate_component(AlbumCard, "AlbumCard").$$render($$result, { id, name, date, description }, {}, {
      default: () => {
        return `${validate_component(Button, "Button").$$render($$result, { type: "Edit", id }, {}, {
          default: () => {
            return `Editar`;
          }
        })}
				${validate_component(Button, "Button").$$render($$result, { type: "Delete", id }, {}, {
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
