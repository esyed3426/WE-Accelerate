'use strict';

require('dotenv').config();
var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var SwaggerUi = require('swaggerize-ui');
var Path = require('path');
var Cors = require('cors');

const App = Express();

var Server = Http.createServer(App);
const PORT = 5010;

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));
App.use(Cors());

App.use(Swaggerize({
    api: Path.resolve('./config/swagger.json'),
    handlers: Path.resolve('./handlers')
}));

App.use('/api-docs', function (req, res) {
    res.json(require('./config/swagger.json'));
});

App.use('/docs', SwaggerUi({
    docs: '/api-docs' // from the express route above.
}));

App.use(function (err, req, res, next) {
    res.status(405).send({status:405, type: 'validation error', message: err.message});
});

Server.listen(PORT, function () {
    App.swagger.api.host = 'localhost:5010';
    /* eslint-disable no-console */
    console.log('App running on ', App.swagger.api.host);
    console.log(`Swagger UI available at http://${App.swagger.api.host}/docs`);
    /* eslint-disable no-console */
});
