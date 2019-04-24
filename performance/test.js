import http from 'k6/http';
// import { Counter, Rate } from "k6/metrics";
import { check } from 'k6';
import data from "./data2.js"

const baseUrl = 'http://127.0.0.1:8080/api';
// k6 run --out influxdb=http://localhost:8086/k6 -e POOL=true /test.js

export let options = {
  // vus: 1,
  // duration: '3m',
  stages: [
    { duration: "1m", target: 10 }, //ramp up to 10 in 3min
    // { duration: "5m", target: 10 }, //stay at 10
    { duration: "4m", target: 0 },
  ]
};

export function setup() {
  const { bikeIds } = data;
  return bikeIds;
}

export default function(bikeIds) {
  const bikeId = bikeIds[Math.floor(Math.random() * bikeIds.length)];
  const res = http.get(baseUrl + `/bike/${bikeId}/trips?pool=${__ENV.POOL}`);
  check(res, { 'status is 200': (r) => r.status === 201 });
};
