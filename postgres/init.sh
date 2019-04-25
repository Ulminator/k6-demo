#!/bin/bash

# $id can be empty if no container exists, true if container is running or, false if container is stopped
id=$(docker inspect -f {{.State.Running}} pg)

if [[ ! -z $id ]]; then
  if [[ $id == true ]]; then
    echo "Postgres is running, stopping and deleting it now"
    docker kill pg
    docker rm pg
  else
    echo "Postgres container is inactive, deleting it now"
    docker rm pg
  fi
fi

docker run -t -p 5432:5432 --name pg -d postgres:9.6
sleep 5

docker cp ./postgres/tables.sql pg:tables.sql
docker cp ./postgres/data pg:data

sleep 1
docker exec -d pg psql postgres -U postgres -f tables.sql
docker exec -i pg /bin/bash -c 'cat data/*.csv | psql postgres -U postgres -c "\copy citi.bike(trip_duration,start_time,stop_time,start_station_id,start_station_name,start_station_latitiude,start_station_longitude,end_station_id,end_station_name,end_station_latitiude,end_station_longitude,bike_id,user_type,birth_year,gender) FROM STDIN CSV;"'
