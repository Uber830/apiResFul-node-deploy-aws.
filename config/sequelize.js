import { Sequelize } from 'sequelize';
import {mySecretP, mySecretU, mySecretH, mySecretDb, mySecretPdb} from '../evn.example.js';

//connection
const sequelize = new Sequelize(mySecretDb, mySecretU, mySecretP, {
  host: mySecretH,
  port: mySecretPdb,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

//message of connection to the databases
async function dbConnectMysql() {
  try{
    await sequelize.sync() //create tables
    await sequelize.authenticate();
    
    console.log('Connection to planetscale!');
  }catch(err){
    console.log('Error of connection to planetscale \n', err);
  }
}

export {dbConnectMysql, sequelize}