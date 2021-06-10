const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('./api/service/config');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const handleResponse = require('./api/helper/response.helper');
const JoiErrors = require('./api/helper/error.helper');

const port = process.env.PORT || config.PORT;


const db = require('./api/models/db.connection');

db.sequelize.sync().then(() => {
  console.log("DB is sync.");
});

app.get('/', (req, res) => res.send('Hello User'));
app.use('/', require('./api/route/route'));

app.use(handleResponse);

app.use(JoiErrors.handleJoiErrors);

app.use(JoiErrors.handleErrors);

app.listen(port, () => { console.log(`Application listening on port ${port}`) });