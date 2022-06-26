import knex from "knex";

const config = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/miacbt.sqlite3'
    },
    migrations : {
      directory: './migrations',
    },
    useNullAsDefault : true,

    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      }
    }
  },
};

const db = knex(config.development);

export default db;
