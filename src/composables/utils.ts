export const isBlank = (str: any): boolean => {
  if (!str) {
    return true;
  } else if (str === null) {
    return true;
  } else if (/^\s*$/.test(str)) {
    return true;
  } else {
    return false;
  }
};
const isBlankTuple = (key: any, value: any) => {
  if (isBlank(value)) {
    return key;
  }
};
export const removeBlankTuples = (obj: any) => {
  const entries = Object.entries(obj);
  const empty: string[] = [];
  entries.forEach(([key, value]) => {
    if (typeof value === "object" && value != null) {
      value = removeBlankTuples(value);
    }
    empty.push(isBlankTuple(key, value));
  });
  empty.forEach((key) => {
    delete obj[key];
  });
  return obj;
};
export const isEmpty = (obj) => {
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== "object") return true;
  for (const key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }

  return true;
};
