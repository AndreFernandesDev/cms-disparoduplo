import { n as noop, f as safe_not_equal, c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "./index-eeb80438.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const albums = writable([]);
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `${type == "h1" ? `<div class="${"flex w-full mt-12 mb-6"}"><h1 class="${"text-3xl py-2 pl-6 border-b-2 border-dashed border-primary"}">${slots.default ? slots.default({}) : ``}</h1></div>` : `${type == "h2" ? `<h2>${slots.default ? slots.default({}) : ``}</h2>` : `${type == "h3" ? `<h3>${slots.default ? slots.default({}) : ``}</h3>` : `${type == "h4" ? `<h4>${slots.default ? slots.default({}) : ``}</h4>` : `${type == "h5" ? `<h5>${slots.default ? slots.default({}) : ``}</h5>` : `${type == "h6" ? `<h6>${slots.default ? slots.default({}) : ``}</h6>` : ``}`}`}`}`}`}`;
});
const Icons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  return `${type == "edit" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1.2rem"}" height="${"1rem"}" fill="${"currentColor"}" viewBox="${"0 0 384 512"}"><path d="${"M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464H360C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"}"></path></svg>` : `${type == "cross" ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"1rem"}" height="${".75rem"}" fill="${"currentColor"}" viewBox="${"0 0 384 512"}"><path d="${"M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"}"></path></svg>` : ``}`}`;
});
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let displaySettings;
  let { type = "Primary" } = $$props;
  let { display = true } = $$props;
  let { href = "" } = $$props;
  let { extraClass = "" } = $$props;
  let { action = "button" } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.extraClass === void 0 && $$bindings.extraClass && extraClass !== void 0)
    $$bindings.extraClass(extraClass);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  displaySettings = display ? "opacity-100 z-50" : "opacity-0 -z-50";
  return `${type === "Primary" ? `<button${add_attribute("type", action, 0)} class="${"btn btn-primary " + escape(displaySettings, true) + " " + escape(extraClass, true)}">${slots.default ? slots.default({}) : ``}</button>` : `${type === "Delete" ? `<button${add_attribute("type", action, 0)} class="${"btn btn-error " + escape(displaySettings, true) + " " + escape(extraClass, true)}">${slots.default ? slots.default({}) : ``}${validate_component(Icons, "Icons").$$render($$result, { type: "cross" }, {}, {})}</button>` : `${type === "Edit" ? `<a${add_attribute("href", href, 0)}><button${add_attribute("type", action, 0)} class="${"btn btn-secondary " + escape(displaySettings, true) + " " + escape(extraClass, true)}">${slots.default ? slots.default({}) : ``}${validate_component(Icons, "Icons").$$render($$result, { type: "edit" }, {}, {})}</button></a>` : `${type === "Popup" ? `<button${add_attribute("type", action, 0)} class="${"btn btn-primary fixed transition-all bottom-14 right-7 " + escape(displaySettings, true) + " " + escape(extraClass, true)}">${slots.default ? slots.default({}) : ``}</button>` : ``}`}`}`}`;
});
export { Button as B, Heading as H, albums as a };
