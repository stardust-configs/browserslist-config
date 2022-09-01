import { expect, test } from 'vitest'

const browserslist = require('browserslist')

test('Valid browserslist config', () => {
  expect(Array.isArray(browserslist(require('./index').join(',')))).toBeTruthy()
})
