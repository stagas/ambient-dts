import '@total-typescript/ts-reset'
import 'vitest/globals'
declare global {
  interface ErrorConstructor {
    captureStackTrace(thisArg: any, func: any): void
  }
}
