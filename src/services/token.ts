//import { definePlugin } from "villus";
export function authPlugin({ opContext }: any): void {
  opContext.headers.Authorization = "Bearer <token>";
}
