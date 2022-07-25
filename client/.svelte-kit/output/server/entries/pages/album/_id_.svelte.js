import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as each } from "../../../immutable/chunks/index-eeb80438.js";
import { f as fromUnix, i as isEqual } from "../../../immutable/chunks/utilities-edd6063c.js";
import { H as Heading, B as Button, a as albums } from "../../../immutable/chunks/Button-dc786067.js";
import "axios";
import { I as Input, M as Modal, a as Image } from "../../../immutable/chunks/Input-ab6f7ba1.js";
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
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_albums;
  let $page, $$unsubscribe_page;
  $$unsubscribe_albums = subscribe(albums, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let form;
  let files;
  $page.params.id;
  let displayUpdateBtn = false;
  let initialAlbum = {};
  let activeImg = { path: "", name: "" };
  let album = {
    name: "",
    description: "",
    location: "",
    date: 0,
    featured: { path: "" },
    media: [{ path: "", name: "" }]
  };
  const showUpdateBtn = () => {
    if (!isEqual(album, initialAlbum) || files.length) {
      displayUpdateBtn = true;
    } else {
      displayUpdateBtn = false;
    }
  };
  const handleImagePreview = (path, name) => {
    activeImg = { path, name };
  };
  const handleDelete = async (id, path) => {
    if (!id)
      return null;
    album.media = album.media.filter((media) => media.id !== id);
    showUpdateBtn();
  };
  const handleFeatured = async (id, path) => {
    if (!id)
      return null;
    const media = album.media.map((media2) => {
      if (media2.id === id) {
        media2.featured = true;
      } else if (media2.id === album.featured.id) {
        media2.featured = false;
      }
      return media2;
    });
    const featured = { id, path };
    ({ id, oldFeaturedId: album.featured.id });
    album = { ...album, media, featured };
    showUpdateBtn();
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${album ? `
	<form class="${"w-full"}"${add_attribute("this", form, 0)}><section class="${"flex flex-wrap items-stretch w-full mt-6"}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
      default: () => {
        return `Adicionar multimedia`;
      }
    })}
		${validate_component(Input, "Input").$$render($$result, {
      onChange: showUpdateBtn,
      type: "filePreview",
      name: "newMediaUpload",
      files
    }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}</section>
	
	<section class="${"flex flex-wrap items-stretch w-full "}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
      default: () => {
        return `Alterar album`;
      }
    })}
		
		<div class="${"flex flex-col w-3/5 pr-12"}">${validate_component(Input, "Input").$$render($$result, {
      value: String(album.name),
      type: "text",
      name: "name",
      placeholder: "Nome..."
    }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
      value: String(album.password),
      type: "text",
      name: "password",
      placeholder: "Senha..."
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
      placeholder: "Local..."
    }, {}, {})}
			${validate_component(Input, "Input").$$render($$result, {
      value: String(fromUnix(album.date)),
      type: "date",
      name: "date",
      placeholder: "Dia do evento..."
    }, {}, {})}
			${validate_component(Button, "Button").$$render($$result, {
      action: "submit",
      type: "Popup",
      display: displayUpdateBtn
    }, {}, {
      default: () => {
        return `Atualizar`;
      }
    })}</div>
		
		<img${add_attribute("src", album.featured.path, 0)} alt="${""}" class="${"w-2/5 h-96 object-cover rounded-md"}"></section></form>


	
	<section class="${"flex flex-wrap w-full"}">${validate_component(Heading, "Heading").$$render($$result, { type: "h1" }, {}, {
      default: () => {
        return `Fotos &amp; Videos`;
      }
    })}
		${album.media && album.media.length ? `${validate_component(Modal, "Modal").$$render($$result, {
      type: "click",
      id: "fullImg",
      extraClass: "bg-black"
    }, {}, {
      default: () => {
        return `<img for="${"my-modal"}"${add_attribute("src", activeImg.path, 0)}${add_attribute("alt", activeImg.name, 0)} class="${"modal-button w-full h-full object-contain rounded-md"}">`;
      }
    })}
			${validate_component(Image, "Image").$$render($$result, {
      modalId: "fullImg",
      onClickDelete: () => handleDelete(album.featured.id, album.featured.path),
      onClick: () => handleImagePreview(album.featured.path, album.featured.name),
      featured: true,
      path: album.featured.path,
      name: album.featured.name
    }, {}, {})}
			${each(album.media, (file) => {
      return `${file.featured === false ? `${validate_component(Image, "Image").$$render($$result, {
        modalId: "fullImg",
        onClickFeatured: () => handleFeatured(file.id, file.path),
        onClickDelete: () => handleDelete(file.id, file.path),
        onClick: () => handleImagePreview(file.path, file.name),
        featured: false,
        path: file.path,
        name: file.name
      }, {}, {})}` : ``}`;
    })}` : ``}</section>` : ``}`;
  } while (!$$settled);
  $$unsubscribe_albums();
  $$unsubscribe_page();
  return $$rendered;
});
export { U5Bidu5D as default };
