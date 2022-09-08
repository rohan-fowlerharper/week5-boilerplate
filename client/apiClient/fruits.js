import request from 'superagent'

export async function fetchFruit() {
  return request.get('/api/fruits').then((res) => res.body)
}
