import '@total-typescript/ts-reset'
import 'vitest/globals'
import 'vitest/importMeta'
declare global {
  interface ErrorConstructor {
    captureStackTrace(thisArg: any, func: any): void
  }
}
