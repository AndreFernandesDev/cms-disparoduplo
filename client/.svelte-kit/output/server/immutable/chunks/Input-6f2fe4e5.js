import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index-a408cf9c.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { handleChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  return `<div class="${"relative z-0 w-full my-4 group"}">${label !== "" ? `<label${add_attribute("for", name, 0)} class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">${escape(label)}</label>` : ``}
    <input type="${"text"}"${add_attribute("value", value, 0)}${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} class="${"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("placeholder", placeholder, 0)} required></div>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { handleChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  return `<div class="${"relative z-0 w-full my-4 group"}"><textarea${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} rows="${"4"}" class="${"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}"${add_attribute("placeholder", placeholder, 0)} required>${escape(value, true)}</textarea></div>`;
});
const Date = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { value = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { handleChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  return `<div class="${"my-4 group"}">${label !== "" ? `<label${add_attribute("for", name, 0)} class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}">${escape(label)}</label>` : ``}
    <div class="${"relative"}"><div class="${"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"}"><svg class="${"w-5 h-5 text-gray-500 dark:text-gray-400"}" fill="${"currentColor"}" viewBox="${"0 0 20 20"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill-rule="${"evenodd"}" d="${"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"}" clip-rule="${"evenodd"}"></path></svg></div>


        <input${add_attribute("value", value, 0)}${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} datepicker="${""}" datepicker-autohide="${""}" autocomplete="${"off"}" type="${"text"}" class="${"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"}"${add_attribute("placeholder", placeholder, 0)}></div></div>`;
});
const File = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { label = "" } = $$props;
  let { files } = $$props;
  let { handleChange = () => {
  } } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  return `<div class="${"relative z-0 w-full my-4 group"}">${label !== "" ? `<label class="${"block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"}"${add_attribute("for", name, 0)}>${escape(label)}</label>` : ``}
    <input class="${"block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} type="${"file"}" multiple></div>`;
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { name } = $$props;
  let { value = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { files = {} } = $$props;
  let { handleChange = () => {
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
  if ($$props.handleChange === void 0 && $$bindings.handleChange && handleChange !== void 0)
    $$bindings.handleChange(handleChange);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${type == "text" ? `${validate_component(Text, "Text").$$render($$result, {
      value: String(value),
      name,
      label,
      placeholder,
      handleChange
    }, {}, {})}` : `${type == "textarea" ? `${validate_component(Textarea, "Textarea").$$render($$result, {
      value: String(value),
      name,
      placeholder,
      handleChange
    }, {}, {})}` : `${type == "date" ? `${validate_component(Date, "Date").$$render($$result, {
      value: String(value),
      name,
      label,
      placeholder,
      handleChange
    }, {}, {})}` : `${type == "file" ? `${validate_component(File, "File").$$render($$result, { name, label, handleChange, files }, {
      files: ($$value) => {
        files = $$value;
        $$settled = false;
      }
    }, {})}` : ``}`}`}`}`;
  } while (!$$settled);
  return $$rendered;
});
export { Input as I };
