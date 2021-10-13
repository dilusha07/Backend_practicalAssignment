const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Dilu",
    host: "localhost",
    port: 5432,
    database: "breedsdb"
});

pool.connect();

pool
.connect()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

module.exports = pool;