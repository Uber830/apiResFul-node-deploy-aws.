import { Sequelize } from 'sequelize';

//connection
const sequelize = new Sequelize('db-name','username', 'password', {
  host: 'localhost',
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