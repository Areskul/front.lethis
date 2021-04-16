export const local = () => {
  const set = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const get = (key: string) => {
    const value = JSON.parse(localStorage.getItem(key)!);
    return value;
  };
  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };
  const removeEmpty = (key: any, value: any) => {
    console.log(key);
    if (isBlank(value)) {
      console.log(value + " = blank");
    }
  };
  const filter = (obj: any) => {
    const array = Object.entries(obj);
    array.forEach(([key, value]) => removeEmpty(key, value));
  };

  return {
    set,
    get,
    filter,
  };
};
