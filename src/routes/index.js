const { Router } = require('express');

const bikeRouter = require('./bikeRoutes');

const router = Router();

router.use('/bike', bikeRouter);

router.get('/health', (req, res) => {
  res.status(200).send({ status: 'UP' });
});

module.exports = router;
