const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: '123456',
    host: 'localhost',
    database: 'my_teacher',
    port: 5433
})