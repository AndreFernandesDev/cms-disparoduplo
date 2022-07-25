import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "./index-eeb80438.js";
import { B as Button } from "./Button-dc786067.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `<div class="${"relative z-0 w-full my-4 group"}">${label !== "" ? `<label${add_attribute("for", name, 0)} class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">${escape(label)}</label>` : ``}
    <input type="${"text"}"${add_attribute("value", value, 0)}${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} class="${"input input-bordered w-full"}"${add_attribute("placeholder", placeholder, 0)} required></div>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `<div class="${"relative z-0 w-full my-4 group"}"><textarea${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} rows="${"4"}" class="${"textarea textarea-bordered w-full h-44"}"${add_attribute("placeholder", placeholder, 0)} required>${escape(value, true)}</textarea></div>`;
});
const Date = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `<div class="${"my-4 group"}">${label !== "" ? `<label${add_attribute("for", name, 0)} class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">${escape(label)}</label>` : ``}
    <div class="${"relative"}"><input type="${"date"}"${add_attribute("value", value, 0)}${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} class="${"input input-bordered w-full"}"${add_attribute("placeholder", placeholder, 0)} required></div></div>`;
});
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { files } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  return `<div class="${"relative z-0 w-full my-4 group"}">${label !== "" ? `<label class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}"${add_attribute("for", name, 0)}>${escape(label)}</label>` : ``}
    <input class="${"block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} type="${"file"}" multiple></div>`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { path } = $$props;
  let { name } = $$props;
  let { modalId } = $$props;
  let { featured } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { onClickDelete = () => {
  } } = $$props;
  let { onClickFeatured = () => {
  } } = $$props;
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.modalId === void 0 && $$bindings.modalId && modalId !== void 0)
    $$bindings.modalId(modalId);
  if ($$props.featured === void 0 && $$bindings.featured && featured !== void 0)
    $$bindings.featured(featured);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.onClickDelete === void 0 && $$bindings.onClickDelete && onClickDelete !== void 0)
    $$bindings.onClickDelete(onClickDelete);
  if ($$props.onClickFeatured === void 0 && $$bindings.onClickFeatured && onClickFeatured !== void 0)
    $$bindings.onClickFeatured(onClickFeatured);
  return `<div class="${"relative rounded-xl p-2 w-1/3 h-96 drop-shadow-2xl"}"><label${add_attribute("for", modalId, 0)} class="${"modal-button w-full h-full p-0 border-0"}"><img${add_attribute("src", path, 0)}${add_attribute("alt", name, 0)} class="${"modal-button w-full h-full object-cover rounded-lg cursor-pointer"}"></label>
        ${!featured ? `<div class="${"absolute bottom-4 right-4 flex gap-4"}">${validate_component(Button, "Button").$$render($$result, { onClick: onClickFeatured }, {}, {
    default: () => {
      return `Tornar Capa`;
    }
  })}
                    ${validate_component(Button, "Button").$$render($$result, { type: "Delete", onClick: onClickDelete }, {}, {})}</div>` : ``}</div>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { type = "clickOutside" } = $$props;
  let { button = "" } = $$props;
  let { extraClass = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.button === void 0 && $$bindings.button && button !== void 0)
    $$bindings.button(button);
  if ($$props.extraClass === void 0 && $$bindings.extraClass && extraClass !== void 0)
    $$bindings.extraClass(extraClass);
  return `${button.length ? `<label${add_attribute("for", id, 0)} class="${"btn modal-button"}">${escape(button)}</label>` : ``}


${type == "clickOutside" ? `<input type="${"checkbox"}"${add_attribute("id", id, 0)} class="${"modal-toggle"}">
    <label${add_attribute("for", id, 0)} class="${"modal cursor-pointer"}"><label class="${"modal-box m-24 p-0 w-3/5 max-w-full relative " + escape(extraClass, true)}" for="${""}"><div class="${"p-6"}">${slots.default ? slots.default({}) : ``}</div></label></label>` : `${type == "click" ? `<input type="${"checkbox"}"${add_attribute("id", id, 0)} class="${"modal-toggle"}">
    <label${add_attribute("for", id, 0)} class="${"modal cursor-pointer"}"><div class="${"modal-box m-24 p-0 w-full max-w-full h-screen " + escape(extraClass, true)}">${slots.default ? slots.default({}) : ``}</div></label>` : ``}`}`;
});
const FilePreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label = "" } = $$props;
  let { preview = true } = $$props;
  let { name } = $$props;
  let { files } = $$props;
  let { onChange = () => {
  } } = $$props;
  let previewFiles = [];
  let activeImg = { path: "", name: "" };
  const renderFiles = () => {
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
  const handleImagePreview = (path, name2) => {
    activeImg = { path, name: name2 };
  };
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  {
    (() => {
      renderFiles();
      console.log(files);
    })();
  }
  return `<div class="${"w-full"}">${label !== "" ? `<label class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}"${add_attribute("for", name, 0)}>${escape(label)}</label>` : ``}
    <input class="${"block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} type="${"file"}" accept="${"image/png, image/gif, image/jpeg, video/mp4, video/x-m4v, video/*"}" multiple></div>
${preview && files.length ? `<section class="${"flex flex-wrap w-full gap-8 mt-12"}">
        ${validate_component(Modal, "Modal").$$render($$result, {
    type: "click",
    id: "newImgPreview",
    extraClass: "bg-black"
  }, {}, {
    default: () => {
      return `<img for="${"my-modal"}"${add_attribute("src", activeImg.path, 0)}${add_attribute("alt", activeImg.name, 0)} class="${"modal-button w-full h-full object-contain rounded-md"}">`;
    }
  })}
        ${each(previewFiles, (media) => {
    return `${validate_component(Image, "Image").$$render($$result, {
      modalId: "newImgPreview",
      onClick: () => handleImagePreview(media.blurb, media.name),
      path: media.blurb,
      name: media.name,
      featured: true
    }, {}, {})}`;
  })}</section>` : ``}`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { name } = $$props;
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { files = {} } = $$props;
  let { onChange = () => {
  } } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.onChange === void 0 && $$bindings.onChange && onChange !== void 0)
    $$bindings.onChange(onChange);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${type == "text" ? `${validate_component(Text, "Text").$$render($$result, {
      value: String(value),
      name,
      label,
      placeholder,
      onChange
    }, {}, {})}` : `${type == "textarea" ? `${validate_component(Textarea, "Textarea").$$render($$result, {
      value: String(value),
      name,
      placeholder,
      onChange
    }, {}, {})}` : `${type == "date" ? `${validate_component(Date, "Date").$$render($$result, {
      value: String(value),
      name,
      label,
      placeholder,
      onChange
    }, {}, {})}` : `${type == "file" ? `${validate_component(File, "File").$$render($$result, { name, label, onChange, files }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}` : `${type == "filePreview" ? `${validate_component(FilePreview, "FilePreview").$$render($$result, { name, label, onChange, files }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}` : ``}`}`}`}`}`;
  } while (!$$settled);
  return $$rendered;
});
export { Input as I, Modal as M, Image as a };
