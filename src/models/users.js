import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';
import { Role } from '/role.js'

class User extends Sequelize.Model { }

User.init({
id: {
  type: Sequelize.INTEGER,
    autoincrement: true,
      primarikey: true
},
name: {
  type: Sequelize.STRING,
  allowNull: false, //requerido
  validate: {
      len: [5,15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
},
age: {
  type: Sequelize.INTEGER,
  allowNull: true
},
country: {
  type: Sequelize.STRING,
  allowNull: true,
  validate: {
      len: [4,30], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
},
roleId: {
  type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'id'
  }
}
}, {
  sequelize,
    modelName: 'user'
})

// Definimos las relaciones
User.belongsTo(Role,{foreignKey: 'roleId'}); // Una User pertenece a un Role

export default User