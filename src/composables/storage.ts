export const local = () => {
  const set = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const get = (key: string) => {
    const value = JSON.parse(localStorage.getItem(key)!);
    return value;
  };
  const isBlank = (str: any) => {
    return !str || /^\s*$/.test(str);
  };
  const isBlankTuple = (key: any, value: any) => {
    if (isBlank(value)) {
      return key;
    }
  };
  const filter = (obj: any) => {
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
  return {
    set,
    get,
    filter,
  };
};
