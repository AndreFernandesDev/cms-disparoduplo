import { g as getContext, c as create_ssr_component, a as add_attribute, v as validate_component, b as subscribe, d as each } from "../../../immutable/chunks/index-a408cf9c.js";
import { a as albums } from "../../../immutable/chunks/albums-dc610c70.js";
import { B as Button, H as Heading } from "../../../immutable/chunks/Heading-eec19c94.js";
import { I as Input } from "../../../immutable/chunks/Input-6f2fe4e5.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { name } = $$props;
  let { featured } = $$props;
  let { onClick } = $$props;
  const handleFeatured = () => {
  };
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.featured === void 0 && $$bindings.featured && featured !== void 0)
    $$bindings.featured(featured);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  return `<div class="${"relative rounded-xl w-1/3 h-96 drop-shadow-2xl"}"><label for="${"fullImg"}" class="${"modal-button w-full h-full p-0 border-0"}"><img for="${"my-modal"}"${add_attribute("src", path, 0)}${add_attribute("alt", name, 0)} class="${"modal-button w-full h-full object-cover rounded-md"}"></label>
    
    ${!featured ? `<div class="${"absolute bottom-0 right-0"}">${validate_component(Button, "Button").$$render($$result, { onClick: handleFeatured }, {}, {
    default: () => {
      return `Tornar Principal`;
    }
  })}
            ${validate_component(Button, "Button").$$render($$result, { type: "Delete" }, {}, {
    default: () => {
      return `Apagar`;
    }
  })}</div>` : ``}</div>`;
});
const ModalSolo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { name } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<input type="${"checkbox"}" id="${"fullImg"}" class="${"modal-toggle"}">
<label for="${"fullImg"}" class="${"modal cursor-pointer"}"><div class="${"modal-box p-0 w-11/12 max-w-5xl h-screen"}"><img for="${"my-modal"}"${add_attribute("src", path, 0)}${add_attribute("alt", name, 0)} class="${"modal-button w-full h-full object-cover rounded-md"}"></div></label>`;
});
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_albums;
  let $page, $$unsubscribe_page;
  $$unsubscribe_albums = subscribe(albums, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.id;
  let displayUpdateBtn = false;
  let activeImg = {};
  let album = {
    name: "",
    description: "",
    location: "",
    date: 0,
    featured: { path: "" },
    media: [{ path: "", name: "" }]
  };
  const handleUpdate = () => {
    console.log(album);
  };
  const handleImagePreview = (path, name) => {
    activeImg = { path, name };
  };
  $$unsubscribe_albums();
  $$unsubscribe_page();
  return `${album ? `${validate_component(Button, "Button").$$render($$result, {
    type: "Popup",
    display: displayUpdateBtn,
    onClick: handleUpdate
  }, {}, {
    default: () => {
      return `Atualizar`;
    }
  })}
	
	<section class="${"flex flex-wrap items-stretch w-full my-12"}"><div class="${"flex flex-col w-2/5 pr-12"}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
    default: () => {
      return `Definicoes`;
    }
  })}
					<p class="${"my-2"}">Apos atualizar album, clique em &quot;Atualizar&quot;.</p>
		<form>${validate_component(Input, "Input").$$render($$result, {
    value: String(album.name),
    type: "text",
    name: "name",
    placeholder: "Alexandre & Jessica..."
  }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
    value: String(album.description),
    type: "textarea",
    name: "description",
    placeholder: "Sobre o evento..."
  }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
    value: album.location,
    type: "text",
    name: "location",
    placeholder: "Madeira..."
  }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
    value: album.date,
    type: "date",
    name: "date",
    placeholder: "Dia do evento..."
  }, {}, {})}</form></div>
		<img${add_attribute("src", album.featured.path, 0)} alt="${""}" class="${"w-3/5 h-96 object-cover rounded-md"}"></section>
	
	<section class="${"flex w-full gap-8"}">${album.media && album.media.length ? `${validate_component(ModalSolo, "ModalSolo").$$render($$result, {
    path: activeImg.path,
    name: activeImg.name
  }, {}, {})}
			${validate_component(Image, "Image").$$render($$result, {
    onClick: () => handleImagePreview(album.featured.path, album.featured.name),
    featured: true,
    path: album.featured.path,
    name: album.featured.name
  }, {}, {})}
			${each(album.media, (file) => {
    return `${file.featured === false ? `${validate_component(Image, "Image").$$render($$result, {
      onClick: () => handleImagePreview(file.path, file.name),
      featured: false,
      path: file.path,
      name: file.name
    }, {}, {})}` : ``}`;
  })}` : ``}</section>` : ``}`;
});
export { U5Bidu5D as default };
