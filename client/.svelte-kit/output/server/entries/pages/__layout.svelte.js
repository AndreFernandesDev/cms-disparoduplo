import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component, e as each, d as escape } from "../../immutable/chunks/index-eeb80438.js";
import { a as albums, H as Heading, B as Button } from "../../immutable/chunks/Button-dc786067.js";
import { I as Input, M as Modal } from "../../immutable/chunks/Input-ab6f7ba1.js";
import "axios";
var app = "";
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
    $$rendered = `<form${add_attribute("this", form, 0)}>${validate_component(Heading, "Heading").$$render($$result, { type: "h2" }, {}, {
      default: () => {
        return `New album`;
      }
    })}
	${validate_component(Input, "Input").$$render($$result, {
      type: "text",
      name: "name",
      placeholder: "Nome do evento..."
    }, {}, {})}
	${validate_component(Input, "Input").$$render($$result, {
      type: "text",
      name: "password",
      placeholder: "Senha..."
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
      onChange: showFiles,
      type: "file",
      name: "media",
      files
    }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(Button, "Button").$$render($$result, {
      action: "submit",
      extraClass: "btn-disabled"
    }, {}, {
      default: () => {
        return `Salvar`;
      }
    })}</form>

<div class="${"flex flex-wrap justify-between items-center mt-12"}">${each(previewFiles, (media, index) => {
      return `${index === 0 ? `<img${add_attribute("src", media.blurb, 0)}${add_attribute("name", media.name, 0)} alt="${"Preview"}" class="${"pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg " + escape(media.name == featured ? "border-primary" : "border-slate-200", true) + " p-1"}">` : `<img${add_attribute("src", media.blurb, 0)}${add_attribute("name", media.name, 0)} alt="${"Preview"}" class="${"pointer:hover w-1/2 h-40 object-contain border-2 rounded-lg " + escape(media.name == featured ? "border-primary" : "border-slate-200", true) + " p-1"}">`}`;
    })}</div>`;
  } while (!$$settled);
  $$unsubscribe_albums();
  return $$rendered;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"navbar bg-base-100"}"><div class="${"flex-1"}"><a href="${"/"}" class="${"btn btn-ghost normal-case text-xl"}">DisparoDuplo</a></div>
		<div class="${"flex-none"}">${validate_component(Modal, "Modal").$$render($$result, { button: "Criar Album", id: "newAlbum" }, {}, {
    default: () => {
      return `${validate_component(Form, "Form").$$render($$result, {}, {}, {})}`;
    }
  })}</div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="${"p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"}"><span class="${"text-sm text-gray-500 sm:text-center dark:text-gray-400"}">\xA9 2022 <a href="${"https://ospinhas.webflow.io/"}" class="${"hover:underline"}">OsPinhas</a>. All Rights Reserved.
	</span>
	<ul class="${"flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"}"><li>DisparoDuplo | Control Panel</li></ul></footer>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container mx-auto"}">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
	<main class="${"flex flex-wrap items-start grow"}">${slots.default ? slots.default({}) : ``}</main></div>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
