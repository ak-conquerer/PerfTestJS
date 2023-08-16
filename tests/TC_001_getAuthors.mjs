
import http from 'k6/http';
import { mainURL, runOptions } from '../utils/helper.mjs';
import { sleep } from 'k6';
import {check} from 'k6';

export const options = {
  stages: runOptions(),
};
export default function () {
  const URL = `${mainURL()}/api/v1/Authors`

  const res = http.get(URL);
  

  check(res, {
    "response code was 200": (res) => res.status === 200
  })
}
sleep(1);

