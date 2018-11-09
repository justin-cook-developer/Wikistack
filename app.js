const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');

// authenticate db
// db.authenticate().then(() => console.log('Database connected'));

const application = express();

const home = require('./views/main.js')

application.use(morgan('dev'));
application.use(express.static(__dirname + '/public'));
application.use(express.json());
application.use(express.urlencoded({extended: false}));

application.use('/', (request, result, next) => {
  result.send(home(''));
})

const PORT = 3000;
application.listen(PORT, () => {
  console.log('The port is listening at port: ', PORT);
})
