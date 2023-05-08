import { Sequelize } from 'sequelize';
import {mySecretP, mySecretU, mySecretH, mySecretDb ,mySecretPdb} from '../evn.example.js';

//connection
const sequelize = new Sequelize( mySecretDb, mySecretU, mySecretP, {
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
    await sequelize.sync({force: false}) //create tables if not exist or delete and create
    await sequelize.authenticate();
    
    console.log('Connection to mysql local!');
  }catch(err){
    console.log('Error of connection to mysql \n', err);
  }
}

export {dbConnectMysql, sequelize}