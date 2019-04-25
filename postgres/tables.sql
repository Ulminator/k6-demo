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

-- CREATE INDEX idx_citi_bike_bike_id ON citi.bike(bike_id);