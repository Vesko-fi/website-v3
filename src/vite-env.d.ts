/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_APPS_SCRIPT_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_APP_ENV: string;
  readonly VITE_DEBUG: string;
  // Add other VITE_ prefixed env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
