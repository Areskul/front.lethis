import { definePlugin } from "villus";
export const authPlugin = (config: { token: string }) => {
  return definePlugin(({ opContext }) => {
    opContext.headers = { Autorisation: `Bearer <${config.token}>` };
  });
};

//export const authPlugin = (config: { token: string }) => {
//function authSetPlugin({ opContext }: any): void {
//opContext.headers.Authorization = `Bearer ${config.token}`;
//}
//};
