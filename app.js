const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const routes = require('./routes');

app.use(express.json());

app.use('/', routes);

dbConnection();

const PORT = 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));