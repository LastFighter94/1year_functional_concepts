const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

// именно с помощью объекта pool будем делать запросы к базе данных

module.exports = pool