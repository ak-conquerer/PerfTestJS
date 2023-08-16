
import http from 'k6/http';
import { sleep } from 'k6';
import {check} from 'k6';
import { mainURL, runOptions } from '../utils/helper.mjs';

export const options = {
  stages: runOptions(),
};

  export default function () {
    const URL = `${mainURL()}/api/v1/Authors/2212`
  const res = http.del(URL);
  sleep(1);

  check(res, {
    "response code was 200": (res) => res.status === 200
  })
}

