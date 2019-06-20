const knex = require('knex');


const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];

// const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')['production']; runs different things from knex file

module.exports= knex(config);
