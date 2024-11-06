const {Pool} = require('pg')

const pool = new Pool({
    user: "Professor",
    host: "localhost",
    database: "fifa_cadastro",
    password: "postgres",
    port: 5432
})

module.exports = pool