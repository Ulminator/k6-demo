const executePool = require('../database/executePool');
const client = require('../database/client');

const getTripsByBikeIdQuery = `
SELECT trip_duration, start_time, stop_time, start_station_id, start_station_name,
       start_station_latitiude, start_station_longitude,
       end_station_id, end_station_name, end_station_latitiude, end_station_longitude,
       bike_id, user_type, birth_year, gender
FROM citi.bike
WHERE bike_id = $1;
`;

async function getTripsByBikeIdWithPool(req, res) {
  const { bikeId } = req.params;
  try {
    const { rows } = await executePool(getTripsByBikeIdQuery, [bikeId]);
    res.status(200).send({ trips: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

async function getTripsByBikeIdWithoutPool(req, res) {
  const { bikeId } = req.params;
  try {
    const { rows } = await client.query(getTripsByBikeIdQuery, [bikeId]);
    res.status(200).send({ trips: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
}

module.exports = {
  getTripsByBikeIdWithPool,
  getTripsByBikeIdWithoutPool,
}
