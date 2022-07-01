// @vitest-environment node
// import syntax is required for vitest
// could be an option to either enable global variables
// or use ESM on the server
import { describe, it, expect } from 'vitest'
const request = require('supertest')
const server = require('./server')

describe('GET /api', () => {
  it('should return 200', async () => {
    const res = await request(server).get('/api')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello World')
  })
})
