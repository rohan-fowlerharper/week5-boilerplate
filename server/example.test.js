// @vitest-environment node
const request = require('supertest')
const server = require('./server')

describe('GET /api', () => {
  it('should return 200', async () => {
    const res = await request(server).get('/api')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello World')
  })
})
