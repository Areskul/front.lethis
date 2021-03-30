export const local = () => {
  const set = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const get = (key: string) => {
    const value = JSON.parse(localStorage.getItem(key)!);
    return value;
  };
  return {
    set,
    get,
  };
};
