const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'Postgres',
    password: '123456',
    host: 'localhost',
    database: 'myteacher',
    port: 5433
})