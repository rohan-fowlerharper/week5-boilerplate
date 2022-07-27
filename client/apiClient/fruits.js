import request from 'superagent'

export async function fetchFruit() {
  return request.get('/api').then((res) => res.body)
}
