import { createPool } from 'mysql2/promise';

//connection
export const pool = createPool({
    host: '',
    user: '',
    password: '',
    port: '',
    database: '',
})