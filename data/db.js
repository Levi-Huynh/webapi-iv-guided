require('dotenv').config();

const dbEngine = process.env.DB || 'development';

const knex = require('knex');



const config = require('../knexfile.js');

// const config = require('../knexfile.js')['development'];
// const config = require('../knexfile.js')['production']; runs different things from knex file

module.exports= knex(config[dbEngine]);
