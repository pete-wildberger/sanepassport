const pg = require('pg');

var config = {
  database: 'sanepassport'
};

var pool = new pg.Pool(config);

module.exports = pool;
