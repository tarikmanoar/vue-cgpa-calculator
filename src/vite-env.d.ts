/// <reference types="vite/client" />

// Add PWA type declarations
declare module 'virtual:pwa-register' {
  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function registerSW(options?: RegisterSWOptions): (() => void)
}

// Add SyncEvent interface that's missing
interface SyncEvent extends Event {
  readonly tag: string;
  readonly lastChance: boolean;
}
