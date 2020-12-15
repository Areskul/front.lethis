export function authPlugin({ opContext }): void {
  opContext.headers.Authorization = "Bearer <token>";
}
