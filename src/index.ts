export const one = 1
export const two = 2

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

export const a: string = 'dfdfd'

/**
 * class test
 */
export class Base {
  name: string
  age?: number

  desc!: string

  readonly foo: string = 'foo'
  constructor(name: string, age: number = 18) {
    this.name = name
    this.age = age

    this.foo = 'bar'
  }

  /**
   * name + age
   */
  get info(): string {
    return `${this.name} + ${this.age}`
  }

  setAge(age: number): void {
    this.age = age
  }
}

const zhangsan = new Base('ZHANG SAN', 5)
console.warn(zhangsan.info)
zhangsan.setAge(30)
console.warn(zhangsan.info)
console.warn(zhangsan.foo)
