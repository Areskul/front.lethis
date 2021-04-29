import { definePlugin } from "villus";

export const omitDeepPlugin = definePlugin(({ afterQuery }) => {
  afterQuery(async (res) => {
    if (res.data != null) {
      const data = await omit(res.data);
      res.data = data;
      return;
    }
  });
});

const omit = async (obj) => {
  const keys = Object.keys(obj);
  let newObj = {};
  for (const key of keys) {
    newObj = obj[key];
  }
  return newObj;
};
