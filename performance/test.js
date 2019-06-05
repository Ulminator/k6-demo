import http from 'k6/http';
import { Rate } from 'k6/metrics';
import { check } from 'k6';
import data from "./data.js"

const baseUrl = 'http://127.0.0.1:8080/api';

export let errorRate = new Rate("errors");

export let options = {
  // vus: 1,
  // duration: '10s',
  // rps: 100,
  stages: [
    { duration: "1m", target: 10 },
    { duration: "4m", target: 10 },
    { duration: "1m", target: 0 },
  ],
  thresholds: {
    errors: ['rate<0.01'],
  },
};

export function setup() {
  const { bikeIds } = data;
  return bikeIds;
}

export default function(bikeIds) {
  const bikeId = bikeIds[Math.floor(Math.random() * bikeIds.length)];
  const res = http.get(baseUrl + `/bike/${bikeId}/trips?pool=${__ENV.POOL}`);
  check(res, {
    'status is 200': (r) => r.status === 200
  }) || errorRate.add(1);
};
