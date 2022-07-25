const fromUnix = (timestamp, start = "year", split = "-") => {
  if (!timestamp)
    return "";
  const date = new Date(timestamp * 1e3);
  const dateDivider = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).split("/");
  const day = dateDivider[0];
  const month = dateDivider[1];
  const year = dateDivider[2];
  if (start == "day")
    return [day, month, year].join(split);
  if (start == "month")
    return [month, day, year].join(split);
  if (start == "year")
    return [year, month, day].join(split);
};
const isEqual = (obj1, obj2) => {
  var props1 = Object.getOwnPropertyNames(obj1);
  var props2 = Object.getOwnPropertyNames(obj2);
  if (props1.length != props2.length) {
    return false;
  }
  for (var i = 0; i < props1.length; i++) {
    let val1 = obj1[props1[i]];
    let val2 = obj2[props1[i]];
    let isObjects = isObject(val1) && isObject(val2);
    if (isObjects && !isEqual(val1, val2) || !isObjects && val1 !== val2) {
      return false;
    }
  }
  return true;
};
function isObject(object) {
  return object != null && typeof object === "object";
}
export { fromUnix as f, isEqual as i };
