k6 run --out influxdb=http://localhost:8086/k6 -e POOL=false performance/test.js

k6 run --out influxdb=http://localhost:8086/k6 -e POOL=true performance/test.js
