import { request, DEMO_KEY } from './request'

export function getEarth() {
  return request({
    url: '/planetary/earth/imagery',
    type: 'get',
    params: {
      api_key: DEMO_KEY,
      // 维度
      lat: 29.55164,
      // 经度
      lon: -95.0972,
      // 日期
      date: '2021-09-09',
      // 图片大小 单位degrees
      dim:0.25,
    },
    responseType: 'arraybuffer'
  })
}