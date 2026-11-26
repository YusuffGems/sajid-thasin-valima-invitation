/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RSVP_WHATSAPP?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
