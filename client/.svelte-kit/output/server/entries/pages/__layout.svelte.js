import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, v as validate_component, d as each } from "../../immutable/chunks/index-a408cf9c.js";
import { a as albums } from "../../immutable/chunks/albums-dc610c70.js";
import { I as Input } from "../../immutable/chunks/Input-6f2fe4e5.js";
var app = "";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { buttonText = "Click me" } = $$props;
  let { id } = $$props;
  if ($$props.buttonText === void 0 && $$bindings.buttonText && buttonText !== void 0)
    $$bindings.buttonText(buttonText);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `
<button class="${"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}" type="${"button"}"${add_attribute("data-modal-toggle", id, 0)}>${escape(buttonText)}</button>


<div${add_attribute("id", id, 0)} tabindex="${"-1"}" aria-hidden="${"true"}" class="${"hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center"}"><div class="${"relative p-4 w-full max-w-4xl h-full md:h-auto"}">
		<div class="${"relative bg-white rounded-lg shadow dark:bg-gray-700"}">
			<div class="${"flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"}"><h3 class="${"text-xl font-semibold text-gray-900 dark:text-white"}">Novo Album
				</h3>
				<button type="${"button"}" class="${"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"}"${add_attribute("data-modal-toggle", id, 0)}><svg class="${"w-5 h-5"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button></div>
			
			<div class="${"p-6 space-y-6"}">${slots.default ? slots.default({}) : ``}</div></div></div></div>`;
});
const Form = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_albums;
  $$unsubscribe_albums = subscribe(albums, (value) => value);
  let form;
  let files;
  let previewFiles = [];
  let featured = "";
  const showFiles = () => {
    if (!files)
      return [];
    previewFiles = [];
    Object.keys(files).forEach((f) => {
      const currentFile = files[parseInt(f)];
      const reader = new FileReader();
      reader.readAsDataURL(currentFile);
      reader.onload = (e) => {
        previewFiles = [
          ...previewFiles,
          {
            file: currentFile,
            blurb: String(e.target ? e.target.result : ""),
            name: currentFile.name
          }
        ];
      };
    });
  };
  const storeFeatured = (imgName) => {
    featured = imgName ? imgName : "";
  };
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (previewFiles.length) {
          storeFeatured(previewFiles[0].name);
        }
      }
    }
    $$rendered = `<form${add_attribute("this", form, 0)}>${validate_component(Input, "Input").$$render($$result, {
      type: "text",
      name: "name",
      placeholder: "Alexandre & Jessica..."
    }, {}, {})}
	${validate_component(Input, "Input").$$render($$result, {
      type: "textarea",
      name: "description",
      placeholder: "Sobre o evento..."
    }, {}, {})}
	${validate_component(Input, "Input").$$render($$result, {
      type: "text",
      name: "location",
      placeholder: "Madeira..."
    }, {}, {})}
	${validate_component(Input, "Input").$$render($$result, {
      type: "date",
      name: "date",
      placeholder: "Dia do evento..."
    }, {}, {})}
	${validate_component(Input, "Input").$$render($$result, {
      handleChange: showFiles,
      type: "file",
      name: "media",
      files
    }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}

	<div class="${"grid xl:grid-cols-2 xl:gap-6"}"></div>
	
	<div class="${"flex items-center py-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"}"><button${add_attribute("data-modal-toggle", "newAlbum", 0)} type="${"submit"}" class="${"text-white " + escape("bg-blue-400 cursor-not-allowed", true) + " dark:bg-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"}" ${"disabled"}>Salvar</button></div></form>

<div class="${"flex flex-wrap justify-between items-center"}">${each(previewFiles, (media, index) => {
      return `${index === 0 ? `<img${add_attribute("src", media.blurb, 0)}${add_attribute("name", media.name, 0)} alt="${"Preview"}" class="${"pointer:hover w-1/2 h-40 object-contain border-2 " + escape(media.name == featured ? "border-blue-700" : "border-slate-200", true) + " p-1"}">` : `<img${add_attribute("src", media.blurb, 0)}${add_attribute("name", media.name, 0)} alt="${"Preview"}" class="${"pointer:hover w-1/2 h-40 object-contain border-2 " + escape(media.name == featured ? "border-blue-700" : "border-slate-200", true) + " p-1"}">`}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_albums();
  return $$rendered;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800"}"><div class="${"container flex flex-wrap justify-between items-center mx-auto"}"><a href="${"/"}" class="${"flex items-center"}"><span class="${"self-center text-xl font-semibold whitespace-nowrap dark:text-white"}">DisparoDuplo</span></a>
		<button data-collapse-toggle="${"mobile-menu"}" type="${"button"}" class="${"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}" aria-controls="${"mobile-menu"}" aria-expanded="${"false"}"><span class="${"sr-only"}">Open main menu</span>
			<svg class="${"w-6 h-6"}" aria-hidden="${"true"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"}" clip-rule="${"evenodd"}"></path></svg>
			<svg class="${"hidden w-6 h-6"}" aria-hidden="${"true"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"}" clip-rule="${"evenodd"}"></path></svg></button>
		<div class="${"hidden w-full md:block md:w-auto"}" id="${"mobile-menu"}"><ul class="${"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"}"><li>${validate_component(Modal, "Modal").$$render($$result, {
    buttonText: "Criar Album",
    id: "newAlbum"
  }, {}, {
    default: () => {
      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {})}`;
    }
  })}</li></ul></div></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"}"><span class="${"text-sm text-gray-500 sm:text-center dark:text-gray-400"}">\xA9 2022 <a href="${"https://ospinhas.webflow.io/"}" class="${"hover:underline"}">OsPinhas</a>. All Rights Reserved.
	</span>
	<ul class="${"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"}"><li>DisparoDuplo | Control Panel</li></ul></footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"container flex flex-wrap items-start content-start mx-auto grow"}">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
