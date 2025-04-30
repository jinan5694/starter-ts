export function foo(): void {
  console.warn('this is a test function')
}
/**
 * return args typeof string
 * @param {any} foo
 * @returns {string} typeof
 */
export function parser<T>(foo: T): string {
  // abc
  return typeof foo
}
