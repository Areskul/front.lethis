export const isBlank = (str: any) => {
  return !str || /^\s*$/.test(str);
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
    empty.push(isBlankTuple(key, value));
  });
  empty.forEach((key) => {
    delete obj[key];
  });
  return obj;
};
