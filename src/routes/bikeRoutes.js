const { Router } = require('express');

const bikeController = require('../controllers/bikeController');

const bikeRouter = Router();

bikeRouter.get('/:bikeId/trips', (req, res) => {
  const { pool } = req.query;
  if (pool == 'true') return bikeController.getTripsByBikeIdWithPool(req, res);
  else return bikeController.getTripsByBikeIdWithoutPool(req, res);
});

module.exports = bikeRouter;
