import { definePlugin } from "villus";
//export const authPlugin = (config: {
//token: string | undefined;
//}): ClientPlugin => {
//return definePlugin(({ opContext }) => {
//if (config.token) {
//opContext.headers = {
//Authorization: "Bearer " + config.token,
//"Content-type": "application/json",
//"Access-Control-Allow-Origin": "*",
//};
//} else {
//opContext.headers = {
//"Content-type": "application/json",
//"Access-Control-Allow-Origin": "*",
//};
//}
//});
//};
export const authPlugin = (token: string) => {
  return definePlugin(({ opContext }) => {
    if (token) {
      opContext.headers = {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    } else {
      opContext.headers = {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };
    }
  });
};

//export const authPlugin = (config: { token: string }) => {
//function authSetPlugin({ opContext }: any): void {
//opContext.headers.Authorization = `Bearer ${config.token}`;
//}
//};
