import {request,DEMO_KEY} from "./request";
import perioddate from '../common/perioddate'

export function getAsteroidsNeoWs() {
  const start_and_end_Arr = perioddate(14) 
    return request({
      url: `/neo/rest/v1/feed`,
      type:'get',
      params:{
        // start_date:null,
        end_date:start_and_end_Arr[1],
        api_key:DEMO_KEY,
      }
    })
  }
  
  