import { Knex } from "knex";
const { resolve } = require("path")
const dotenv = require("dotenv")

dotenv.config({
  path: resolve(__dirname, "..", "..", ".env")
})

const knexFile = {
  development: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: resolve(__dirname, "migrations")
    }
  },
  production: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: resolve(__dirname, "migrations")
    }
  }
} as Knex.Config

module.exports = knexFile
