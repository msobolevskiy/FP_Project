import { Pool } from 'pg';

// A connection pool is created with database parameters
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fpbd',
    password: 'cvfrcbv',
    port: 5432,
});

// Checking the connection
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Successful connection:', res.rows[0]);
    }
});

export default pool;
