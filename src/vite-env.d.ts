/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly API_DOGS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
