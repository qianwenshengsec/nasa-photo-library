import {request,DEMO_KEY} from "./request";
import perioddate from '../common/perioddate'


console.log(start_and_end_Arr)

export function getApod() {
const start_and_end_Arr = perioddate(25) 
  return request({
    url: `/planetary/apod`,
    type:'get',
    params:{
      start_date:start_and_end_Arr[0],
      end_date:start_and_end_Arr[1],
      api_key:DEMO_KEY,
    }
  })
}

