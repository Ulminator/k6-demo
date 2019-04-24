const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).send();
});

const PORT = process.env.PORT || 8080;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
