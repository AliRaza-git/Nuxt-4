// plugins/logger.ts
//@ts-ignore
export default defineNuxtPlugin((nuxtApp) => {
  const logger = {
    log: (message: string) => console.log(`[LOG]: ${message}`),
    error: (message: string) => console.error(`[ERROR]: ${message}`),
    warn: (message: string) => console.warn(`[WARN]: ${message}`)
  }

  return {
    provide: {
      logger
    }
  }
})
