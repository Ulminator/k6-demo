CREATE SCHEMA IF NOT EXISTS citi;

CREATE TABLE IF NOT EXISTS citi.bike (
    trip_duration INTEGER,
    start_time DATE,
    stop_time DATE,
    start_station_id INTEGER,
    start_station_name TEXT,
    start_station_latitiude DECIMAL,
    start_station_longitude DECIMAL,
    end_station_id INTEGER,
    end_station_name TEXT,
    end_station_latitiude DECIMAL,
    end_station_longitude DECIMAL,
    bike_id INTEGER,
    user_type TEXT,
    birth_year SMALLINT,
    gender SMALLINT
);

--"tripduration","starttime","stoptime","start station id","start station name","start station latitude",
--306,"2019-03-01 06:47:08.2110","2019-03-01 06:52:14.7150",3183,"Exchange Place",40.7162469,
--"start station longitude","end station id","end station name","end station latitude","end station longitude",
--74.0334588,3267,"Morris Canal",40.7124188237569,-74.03852552175522,
--"bikeid","usertype","birth year","gender"
--26272,"Subscriber",1989,1