// @vitest-environment node
import supertest from 'supertest'

import * as db from './db/fruits.db'
import createServer from './server'

vi.mock('./db/fruits.db')

let request
let server
beforeAll(async () => {
  server = await createServer()
  request = supertest.agent(server)
})

describe('GET /api/hello-world', () => {
  it('should return 200', async () => {
    const res = await request.get('/api/hello-world')
    expect(res.status).toBe(200)
    expect(res.body.message).toBe('Hello World')
  })
})

describe('GET /api/fruits', () => {
  it('should return a list of fruits', async () => {
    db.getAllFruits.mockReturnValue(
      Promise.resolve([{ id: 1, name: 'Apple', color: 'Red' }])
    )

    const res = await request.get('/api/fruits')

    expect(res.body[0].name).toBe('Apple')
  })
})
