import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';
import { mainURL, runOptions } from '../utils/helper.mjs';
export const options = {
  stages: runOptions(),
};

export default function () {
   const URL = `${mainURL()}/api/v1/Authors/2212`
   

    const payload = JSON.stringify({
    
            id: 2212,
            idBook: 1132,
            firstName: 'Kannoon',
            lastName: 'Kaanoon'
          
    });
    const params = {
        headers : 
        {
            'Content-Type':'application/json'
        }
    }

  const res = http.put(URL, payload, params);
  
  check(res, {
    "response code was 200": (res) => res.status === 200,
    "body contains firstName": (res) => res.body.includes('Kannoon'),
  })

  }
  sleep(1);


