

const localPgConnection = {
   //connection can be object or string
   host: 'localhost', //address to find the db server
   database: 'lambda', 
   user: 'levi',
   password: 'pass'
}

//where is DATABASE_URL coming from? 
//
const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //not needed for production only sqlite
    connection: {
      filename: './data/shoutouts.db3',
    },
  
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    production: {
      client: 'pg',
      connection: dbConnection, 
       pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
        min: 2,
        max: 10,
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      //{
      //   //connection can be object or string
      //   host: 'localhost', //address to find the db server
      //   database: 'lambda', 
      //   user: 'luis',
      //   password: 'pass'
      // },

    }
  },
};
