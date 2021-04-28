import { definePlugin } from "villus";

export const omitDeepPlugin = definePlugin(({ afterQuery }) => {
  afterQuery((res) => {
    if (res.data != null) {
      const data = omit(res.data);
      res.data = data;
      return;
    }
  });
});

const omit = (obj) => {
  const keys = Object.keys(obj);
  let newObj = {};
  for (const key of keys) {
    console.log(obj[key]);
    newObj = obj[key];
  }
  return newObj;
};
