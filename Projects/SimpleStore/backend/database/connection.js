const { Client } = require('pg');

const checkIfDatabaseExists = (config, targetDB) => {
  const client = new Client(config);

  client
    .connect()
    .then(() => {
      console.log(`Connected to ${config.database}`);
      return client
        .query(`SELECT 1 FROM pg_database WHERE datname=$1`, [targetDB])
        .then((result) => {
          if (result.rowCount === 0) {
            client.query(`CREATE DATABASE ${targetDB}`).then((value) => {
              console.log('Database created successfully...');
            });
          } else {
            console.log('Database already exists');
          }
        });
    })
    .catch((err) => {
      console.log(err.stack);
    });
};

checkIfDatabaseExists(
  {
    database: 'postgres',
    port: 5432,
    user: 'jozef',
    password: '20081',
  },
  'simplestore',
);
