/** Centralised page path registry. All paths are relative to `baseURL` defined in `playwright.config.ts`. */
export const URLS = {
  home: "/",
  login: "/login.html",
  register: "/register.html",
  docs: "/docs.html",
  apiDocs: "/swagger.html",
} as const;
