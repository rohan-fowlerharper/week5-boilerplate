// @vitest-environment node
const request = require('supertest')
const createServer = require('./server')

let server
beforeEach(async () => {
  server = await createServer()
})

describe('GET /api', () => {
  it('should return 200', async () => {
    const res = await request(server).get('/api')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(2)
  })
})
