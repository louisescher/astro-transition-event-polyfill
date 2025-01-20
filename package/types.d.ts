interface ImportMetaEnv {
    SSR: boolean;
    // add other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }