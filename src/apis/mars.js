import { request, DEMO_KEY } from './request'

export function getMarsCuriosity() {
  return request({
    url: '/mars-photos/api/v1/rovers/curiosity',
    type: 'get',
    params: {
      api_key: DEMO_KEY,
    },
  })
}

export function getMarsOpportunity() {
  return request({
    url: '/mars-photos/api/v1/rovers/opportunity',
    type: 'get',
    params: {
      api_key: DEMO_KEY,
    },
  })
}

export function getMarsSpirit() {
  return request({
    url: '/mars-photos/api/v1/rovers/spirit',
    type: 'get',
    params: {
      api_key: DEMO_KEY,
    },
  })
}