const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {  //prepares for heroku setup; this is required if using heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL); //JAWSDB_URL is unique user url from heroku
} else { //local process if not using heroku
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: '127.0.0.1',
      dialect: 'mysql',
      port: 3306,
      logging: false
    }
  );
}

module.exports = sequelize;
