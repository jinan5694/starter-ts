import { describe, expect, it } from 'vitest'

import { parser } from '../src/index'

describe('should', () => {
  it('exported', () => {
    expect(1).toEqual(1)
  })
})

describe('parser', () => {
  it('is string', () => {
    expect(parser('abc')).toEqual('string')
  })
  it('is number', () => {
    expect(parser(3)).toEqual('number')
  })
  it('is empty', () => {
    expect(parser({})).toEqual('number')
  })
})
