import pgPromise from 'pg-promise';

const pgp = pgPromise({})

const db = pgp({
  user: 'postgres',
  password: 'secret123',
  host: '0.0.0.0',
  port: 5432,
  database: 'cleanconsumer'
})

export default db;
