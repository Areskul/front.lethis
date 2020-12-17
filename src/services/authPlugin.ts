import { definePlugin } from "villus";
export const authPlugin = (config: { token: string }): any => {
  return definePlugin(({ opContext }) => {
    if (config.token != null) {
      opContext.headers = { Authorisation: config.token };
    }
  });
};

//export const authPlugin = (config: { token: string }) => {
//function authSetPlugin({ opContext }: any): void {
//opContext.headers.Authorization = `Bearer ${config.token}`;
//}
//};
