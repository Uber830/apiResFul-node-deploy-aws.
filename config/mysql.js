import { Sequelize } from 'sequelize';
import {mySecretP, mySecretU, mySecretH, mySecretDb} from '../evn.example.js';

//connection
const sequelize = new Sequelize(mySecretDb, mySecretU, mySecretP, {
  host: mySecretH,
  dialect: 'mysql'
})

async function dbConnectMysql() {
  try{
    await sequelize.authenticate();
    
    console.log('Connection to planetscale!');
  }catch(err){
    console.log('Error of connection to planetscale \n', err);
  }
}

export {dbConnectMysql, sequelize}